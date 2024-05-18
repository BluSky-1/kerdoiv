import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllQueryRoutingModule } from './all-query-routing.module';
import { AllQueryComponent } from './all-query.component';


@NgModule({
  declarations: [
    AllQueryComponent,
  ],
  imports: [
    CommonModule,
    AllQueryRoutingModule
  ]
})
export class AllQueryModule { }
