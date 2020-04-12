import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { ShowAllComponent } from './show-all/show-all.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [AddCategorieComponent, ShowAllComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    FormsModule
  ]
})
export class CategoriesModule { }
