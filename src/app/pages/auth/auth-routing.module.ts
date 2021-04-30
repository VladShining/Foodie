import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: 'login',
    component: SigninComponent,
    data: { title: '🔒 Authentification' },
  },
  {
    path: 'register',
    component: SignupComponent,
    data: { title: '💾 Registration' },
  },
  {
    path: '',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
