import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowAllComponent} from "./show-all/show-all.component";


const routes: Routes = [

  {
    path: '',
    component: ShowAllComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
