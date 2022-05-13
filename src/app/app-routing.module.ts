import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RootGuard } from './root/services/root.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./root/root.module').then((m) => m.RootModule),
    canActivate: [RootGuard],
  },

  {
    path: 'sales',
    loadChildren: () =>
      import('./sales/sales.module').then((m) => m.SalesModule),
  },
  {
    path: 'recip',
    loadChildren: () =>
      import('./recip/recip.module').then((m) => m.RecipModule),
  },
  {
    path: 'entertainment',
    loadChildren: () =>
      import('./entertainment/entertainment.module').then(
        (m) => m.EntertainmentModule
      ),
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'blogs',
    loadChildren: () =>
      import('./blogs/blogs.module').then((m) => m.BlogsModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
