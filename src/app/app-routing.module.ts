import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForOforComponent } from './for-ofor/for-ofor.component';
import { fade } from './pages/root/animation';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'root',
    loadChildren: () =>
      import('./pages/root/root.module').then((m) => m.RootModule),
    // canActivate: [AuthGuard],
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', component: ForOforComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
