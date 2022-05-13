import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ProfilComponent } from './components/profil/profil.component';
import { UsersComponent } from './components/users/users.component';


@NgModule({
  declarations: [
    ProfilComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
