import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { OrderPackageComponent } from './order-package/order-package.component';
import { PackagesRoutingModule } from './packages.routing.module';

@NgModule({
    declarations: [
        OrderPackageComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PackagesRoutingModule
    ],
    providers: [],
    exports: [
    ]

})
export class PackagesModule {
}