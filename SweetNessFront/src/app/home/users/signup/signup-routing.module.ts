import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from "./user/user.component";
import {SocieteComponent} from "./societe/societe.component";
import {SignupComponent} from "./signup.component";


const routes: Routes = [
  {
    path:'',
    component: SignupComponent,
    children :
    [
       {path: 'user',
        component:UserComponent},
      {
        path:'societe',
        component:SocieteComponent
      }
       ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
