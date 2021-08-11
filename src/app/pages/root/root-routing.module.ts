import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WildCardComponent } from '../wild-card/wild-card.component';
import { RootComponent } from './root.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: 'user',
        data: {
          routerLink: '/root/user',
          title: 'utilisateur',
        },
        loadChildren: () =>
          import('./user/user.module').then((m) => m.UserModule),
      },
      {
        path: 'recip',
        data: {
          routerLink: '/root/recip',
          title: 'recettes',
        },
        loadChildren: () =>
          import('./recip/recip.module').then((m) => m.RecipModule),
      },
      {
        path: 'calendar',
        data: {
          routerLink: '/root/calendar',
          title: 'calendrier',
        },
        loadChildren: () =>
          import('./calendar/calendar.module').then((m) => m.CalendarModule),
      },
      {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full',
      },
      { path: '**', component: WildCardComponent },
    ],
  },
  {
    path: '**',
    component: WildCardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RootRoutingModule {}
