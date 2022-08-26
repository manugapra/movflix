import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'accounts',
    loadChildren: () =>
      import('./pages/accounts/accounts.module').then((m) => m.AccountsModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  { path: '', pathMatch: 'full', redirectTo: '/accounts' },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
