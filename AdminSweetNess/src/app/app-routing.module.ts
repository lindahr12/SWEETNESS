import { FournisseurComponent } from './home/fournisseur/fournisseur.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from "./login/login.component";
import {AppComponent} from './app.component';
import {SignupComponent} from "./login/signup/signup.component";
import {BaseLayoutComponent} from "./home/base-layout/base-layout.component";
import {DashboardRoutingModule} from "./home/dashboard/dashboard-routing.module";
import {MainComponent} from "./home/dashboard/main/main.component";
import {LotComponent} from "./home/lot/lot.component";
import {MarqueComponent} from "./home/marque/marque.component";
import {CommandeComponent} from "./home/commande/commande.component";
import {FactureComponent} from "./home/facture/facture.component";

const routes: Routes = [

  {
    path:'home',
    component: HomeComponent, children :[
       {path: 'categorie',
         loadChildren: './home/categories/categories.module#CategoriesModule'
       },
      {
        path:'users',
        loadChildren: './home/users/users.module#UsersModule'
      },
      {
        path:'dashboard',
        loadChildren: './home/dashboard/dashboard.module#DashboardModule'

      },
      {
        path:'product',
        loadChildren: './home/product/product.module#ProductModule'

      },
      {
        path:'lot',
        component:LotComponent
      },
      {
        path:'marque',
        component:MarqueComponent
      },
      {
        path:'fournisseur',
        component:FournisseurComponent
      },
      {
        path:'commandes',
        component:CommandeComponent
      },
      {
        path:'facture',
        component:FactureComponent
      },

    ]

  },


  {
    path:'',
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
