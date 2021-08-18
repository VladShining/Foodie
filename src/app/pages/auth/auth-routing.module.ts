import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WildCardComponent } from '../wild-card/wild-card.component';
import { SigninLostComponent } from './signin-lost/signin-lost.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'lost', component: SigninLostComponent },
  { path: 'login', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: WildCardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
