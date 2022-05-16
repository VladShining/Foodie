import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ProfilComponent } from './components/profil/profil.component';
import { UsersComponent } from './components/users/users.component';
import { UsersContainerComponent } from './components/users-container/users-container.component';
import { UsersDetailComponent } from './components/users-detail/users-detail.component';
import { UsersFormComponent } from './components/users-form/users-form.component';


@NgModule({
  declarations: [
    ProfilComponent,
    UsersComponent,
    UsersContainerComponent,
    UsersDetailComponent,
    UsersFormComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
