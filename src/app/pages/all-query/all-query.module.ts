import { EventEmitter, Input, NgModule,OnChanges,OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllQueryRoutingModule } from './all-query-routing.module';
import { AllQueryComponent } from './all-query.component';
import { MatCardModule} from '@angular/material/card'
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { Query } from '../../shared/models/Query';
import { QueryService } from '../../shared/services/query.service';
import { QueryPickerComponent } from './query-picker/query-picker.component';
import { CurrentQueryComponent } from './current-query/current-query.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AllQueryComponent,
    QueryPickerComponent,
    CurrentQueryComponent
  ],
  imports: [
    CommonModule,
    AllQueryRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    ReactiveFormsModule

  ]
})
export class AllQueryModule {

 

  

  


 }
