import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { AllProductComponent } from './all-product/all-product.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [AddProductComponent, AllProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule
  ]
})
export class ProductModule { }
