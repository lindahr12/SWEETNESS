import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddCategorieComponent} from "./add-categorie/add-categorie.component";
import {ShowAllComponent} from "./show-all/show-all.component";


const routes: Routes = [
  {
    path: '',
    component: AddCategorieComponent
  },
  {
    path: 'show_all',
    component: ShowAllComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
