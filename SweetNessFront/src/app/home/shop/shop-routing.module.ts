import {FirstComponent} from "./first/first.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";


const routes: Routes = [
  {
    path:'',
    component: FirstComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
