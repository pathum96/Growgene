import { Injectable } from "@angular/core";
import { PackagesAPIHandler } from "../api/handlers/packages.api.handler";

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  constructor(
    private packagesAPIHandler : PackagesAPIHandler
  ) { }

  getPackageData() {
    return this.packagesAPIHandler.getPackageData()
    .then((res) => {
      const user = res;
      return user;
    })
  }
}