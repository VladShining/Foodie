import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipComponent } from './recip/recip.component';
import { RootComponent } from './root.component';
import { ProfilComponent } from './user/profil/profil.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'recip',
        component: RecipComponent,
      },
      {
        path: 'profil',
        component: ProfilComponent,
      },
      { path: '', redirectTo: 'home' },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RootRoutingModule {}
