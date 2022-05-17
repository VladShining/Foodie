import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilComponent } from './components/profil/profil.component';
import { UsersContainerComponent } from './components/users-container/users-container.component';
import { UsersLoginComponent } from './components/users-login/users-login.component';
import { UsersComponent } from './components/users/users.component';
import { UserLoginGuard } from './guard/user-login.guard';
import { UsersPrivilegeGuard } from './guard/users-privilege.guard';

const routes: Routes = [
  {
    path: 'all',
    component: UsersComponent,
  },
  {
    path: 'profil',
    component: ProfilComponent,
    canActivate: [UsersPrivilegeGuard],
  },
  {
    path: 'login',
    component: UsersLoginComponent,
    canActivate: [UserLoginGuard],
  },
  {
    path: '**' || '',
    redirectTo: 'all',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
