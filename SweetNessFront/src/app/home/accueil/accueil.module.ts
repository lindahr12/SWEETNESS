import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccueilRoutingModule } from './accueil-routing.module';
import { FirstComponent } from './first/first.component';


@NgModule({
  declarations: [FirstComponent],
  imports: [
    CommonModule,
    AccueilRoutingModule
  ]
})
export class AccueilModule { }
