import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './shared/services/auth.guard';

const routes: Routes = [
  {
    path: 'all-query',
    loadChildren: () => import('./pages/all-query/all-query.module').then(m => m.AllQueryModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then(m => m.SignUpModule)
  },
  {
    path: 'log-in',
    loadChildren: () => import('./pages/log-in/log-in.module').then(m => m.LogInModule)
  },
  {
    path: 'query',
    loadChildren: () => import('./pages/query/query.module').then(m => m.QueryModule)
  },
  {
    path: 'create-query',
    loadChildren: () => import('./pages/create-query/create-query.module').then(m => m.CreateQueryModule),
    canActivate: [authGuard]
  },
  {
    path: 'not-found',

    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  },
  {
    path:'',
    redirectTo:'/main',
    pathMatch: 'full',
  },
  {
    path:'**',
    redirectTo:'/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
