import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateQueryRoutingModule } from './create-query-routing.module';
import { CreateQueryComponent } from './create-query.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [
    CreateQueryComponent,
    
  ],
  imports: [
    CommonModule,
    CreateQueryRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
  ]
})
export class CreateQueryModule { }
