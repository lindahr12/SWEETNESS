import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllProductComponent} from "./all-product/all-product.component";


const routes: Routes = [
  {
    path: '',
    component: AllProductComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
