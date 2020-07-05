import { PanierComponent } from './home/panier/panier.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AproposComponent} from "./home/apropos/apropos.component";

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,children :
      [
        {path: 'accueil',
        loadChildren: './home/accueil/accueil.module#AccueilModule'},
        {path: 'shop',
          loadChildren: './home/shop/shop.module#ShopModule'},
        {path: 'portfolio',
          loadChildren: './home/portfolio/portfolio.module#PortfolioModule'},
        {path: 'contact',
        loadChildren: './home/contact/contact.module#ContactModule'},
        
        {path: 'users',
          loadChildren: './home/users/users.module#UsersModule'},
        {
          path:'apropos',
          component: AproposComponent
        },
        {
          path:'panier',
          component: PanierComponent
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

