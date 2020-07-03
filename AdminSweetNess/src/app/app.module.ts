import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { HeaderComponent } from './home/header/header.component';
import { BaseLayoutComponent } from './home/base-layout/base-layout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './login/signup/signup.component';
import {HttpClientModule} from "@angular/common/http";
import { LayoutComponent } from './home/layout/layout.component';
import {NgxDropzoneModule} from "ngx-dropzone";
import { LotComponent } from './home/lot/lot.component';
import { MarqueComponent } from './home/marque/marque.component';
import {MultiSelectAllModule} from "@syncfusion/ej2-angular-dropdowns";
import { FournisseurComponent } from './home/fournisseur/fournisseur.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    BaseLayoutComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    LayoutComponent,
    LotComponent,
    MarqueComponent,
    FournisseurComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxDropzoneModule,
    MultiSelectAllModule



  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
