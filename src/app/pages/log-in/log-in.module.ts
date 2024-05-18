import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogInRoutingModule } from './log-in-routing.module';
import { LogInComponent } from './log-in.component';
import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    LogInComponent,
    
  ],
  imports: [
    CommonModule,
    LogInRoutingModule,
    ReactiveFormsModule,
    

  ]
})
export class LogInModule { }
