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
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
