import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateQueryModule } from './create-query.module';
import { CreateQueryComponent } from './create-query.component';

const routes: Routes = [
  { path: '', component: CreateQueryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateQueryRoutingModule { }
