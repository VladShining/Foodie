import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipComponent } from './recip/recip.component';
import { RootComponent } from './root.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  // {
  //   path: 'home',
  //   component: HomeComponent,
  // },
  // {
  //   path: 'recip',
  //   component: RecipComponent,
  // },
  // {
  //   path: 'user',
  //   component: UserComponent, // à revoir pour direction profil
  // },
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
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RootRoutingModule {}
