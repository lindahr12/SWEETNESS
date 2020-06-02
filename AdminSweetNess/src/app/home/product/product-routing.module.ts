import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddProductComponent} from "./add-product/add-product.component";
import {AllProductComponent} from "./all-product/all-product.component";


const routes: Routes = [
  {
    path: '',
    component: AddProductComponent,
    data: {title: 'product'}
  },
  {
    path: 'all-product',
    component: AllProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
