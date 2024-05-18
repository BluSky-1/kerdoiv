import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateQueryRoutingModule } from './create-query-routing.module';
import { CreateQueryComponent } from './create-query.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateQueryComponent,
    
  ],
  imports: [
    CommonModule,
    CreateQueryRoutingModule,
    ReactiveFormsModule
  ]
})
export class CreateQueryModule { }
