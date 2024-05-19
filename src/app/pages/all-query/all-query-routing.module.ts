import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllQueryComponent } from './all-query.component';

const routes: Routes = [
  { path: '', component: AllQueryComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllQueryRoutingModule { }
