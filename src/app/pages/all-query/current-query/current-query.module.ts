import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrentQueryRoutingModule } from './current-query-routing.module';
import { CurrentQueryComponent } from './current-query.component';


@NgModule({
  declarations: [
    CurrentQueryComponent
  ],
  imports: [
    CommonModule,
    CurrentQueryRoutingModule
  ]
})
export class CurrentQueryModule { }
