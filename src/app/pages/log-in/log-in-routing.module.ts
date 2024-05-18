import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in.component';
import { LogInModule } from './log-in.module';

const routes: Routes = [
  { path: '', component: LogInComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogInRoutingModule { }
