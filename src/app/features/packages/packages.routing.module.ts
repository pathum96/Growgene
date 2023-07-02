import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OrderPackageComponent } from "./order-package/order-package.component";

const routes: Routes = [
    {
        path: '',
        component: OrderPackageComponent,
    },
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class PackagesRoutingModule { }