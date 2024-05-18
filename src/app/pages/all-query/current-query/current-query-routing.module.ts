import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentQueryComponent } from './current-query.component';

const routes: Routes = [{ path: '', component: CurrentQueryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrentQueryRoutingModule { }
