import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { UserComponent } from './user/user.component';
import { SocieteComponent } from './societe/societe.component';
import { SignupComponent } from './signup.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [UserComponent, SocieteComponent, SignupComponent],
  imports: [
    CommonModule,
    SignupRoutingModule,
    ReactiveFormsModule
  ]
})
export class SignupModule { }
