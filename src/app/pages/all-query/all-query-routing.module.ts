import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllQueryComponent } from './all-query.component';

const routes: Routes = [
  { path: '', component: AllQueryComponent },
  { path: 'current-query', loadChildren: () => import('./current-query/current-query.module').then(m => m.CurrentQueryModule) }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllQueryRoutingModule { }
