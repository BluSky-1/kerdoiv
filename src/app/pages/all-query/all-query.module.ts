import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllQueryRoutingModule } from './all-query-routing.module';
import { AllQueryComponent } from './all-query.component';
import { MatCardModule} from '@angular/material/card'
import { MatInputModule } from '@angular/material/input';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AllQueryComponent,
  ],
  imports: [
    CommonModule,
    AllQueryRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule
  ]
})
export class AllQueryModule { }
