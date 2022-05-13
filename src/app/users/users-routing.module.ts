import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilComponent } from './components/profil/profil.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {
    path: '',
    // component: ProfilComponent,
    children: [
      {
        path: 'all',
        component: UsersComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
