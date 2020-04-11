import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from "./login/login.component";
import {AppComponent} from './app.component';
import {SignupComponent} from "./login/signup/signup.component";
import {AddCategorieComponent} from "./home/categories/add-categorie/add-categorie.component";
import {BaseLayoutComponent} from "./home/base-layout/base-layout.component";


const routes: Routes = [
  {
    path:'home',
    component: HomeComponent, children :[
  {path: 'categories',
    loadChildren: './home/categories/categories.module#CategoriesModule'},
      {
        path:'users',
        loadChildren: './home/users/users.module#UsersModule'
      }
    ]

  },


  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
