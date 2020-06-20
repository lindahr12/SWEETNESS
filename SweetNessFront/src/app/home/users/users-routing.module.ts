import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";


const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {path: '*',
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
