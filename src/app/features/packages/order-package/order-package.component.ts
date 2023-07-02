import { Component, OnInit } from '@angular/core';
import { PackagesService } from 'src/app/core/services/packages.service';
import { Cleaner, Package, PackagesData } from 'src/app/shared/models/package';

@Component({
  selector: 'app-order-package',
  templateUrl: './order-package.component.html',
  styleUrls: ['./order-package.component.scss']
})
export class OrderPackageComponent implements OnInit {
  data: PackagesData | undefined;
  package: Package | undefined;
  cleaner: Cleaner | undefined;
  subItems: Package[] =  [];
  unitPrice: string = '';
  selectedCount: number = 1;
  selectedSort: number = 0;
  isLoading: boolean = true;
  isHideOrderSummary: boolean = false;

  constructor(
    private packagesService: PackagesService
  ) { }

  ngOnInit(): void {
    this.packagesService.getPackageData()
    .then((res: PackagesData) => {
      this.data = res;
      this.cleaner = this.data?.items[0];
      this.subItems = this.data?.items[0]?.items;

      this.subItems = this.subItems.sort(
        (a, b) => (a.sort < b.sort) ? -1 : 1
      );

      this.unitPrice = (this.subItems[0]?.unitPrice).toFixed(2);
      this.package = this.subItems[0];
      this.isLoading = false;
    });
  }

  onSelectCleaners(item: Cleaner) {
    this.cleaner = item;
    this.selectedCount = this.cleaner.count;
    this.subItems = item?.items;

    this.subItems = this.subItems.sort(
      (a, b) => (a.sort < b.sort) ? -1 : 1
    );
    this.unitPrice = (this.subItems[0]?.unitPrice).toFixed(2);
    this.package = this.subItems[0];
  }

  getPricePerHour(item: Package) {
    return (item?.unitPrice / (item.minutes / 60)).toFixed(2);
  }

  onSelectHours(item: Package) {
    this.package = item;
    this.selectedSort = item.sort;
    this.unitPrice = (item.unitPrice).toFixed(2);
  }

  hideOrShow() {
    this.isHideOrderSummary = !this.isHideOrderSummary;
  }
}
