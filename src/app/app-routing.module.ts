import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
import { MainComponent } from './pages/main/main.component';
import { WildCardComponent } from './pages/wild-card/wild-card.component';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'component',
    component: LoaderComponent,
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'root',
    loadChildren: () =>
      import('./pages/root/root.module').then((m) => m.RootModule),
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', component: WildCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
