import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ProfilComponent } from './components/profil/profil.component';
import { UsersComponent } from './components/users/users.component';
import { UsersContainerComponent } from './components/users-container/users-container.component';
import { UsersDetailComponent } from './components/users-detail/users-detail.component';
import { UsersFormComponent } from './components/users-form/users-form.component';
import { UsersService } from './services/users.service';
import { UsersPrivilegeGuard } from './guard/users-privilege.guard';
import { UsersLoginComponent } from './components/users-login/users-login.component';
import { UserLoginGuard } from './guard/user-login.guard';

@NgModule({
  declarations: [
    ProfilComponent,
    UsersComponent,
    UsersContainerComponent,
    UsersDetailComponent,
    UsersFormComponent,
    UsersLoginComponent,
  ],
  imports: [CommonModule, UsersRoutingModule],
  providers: [UsersService, UsersPrivilegeGuard, UserLoginGuard],
})
export class UsersModule {}
