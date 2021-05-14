import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { fade, home } from './animation';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';
import { RecipListComponent } from './recip-list/recip-list.component';
import { RecipComponent } from './recip/recip.component';
import { RootComponent } from './root.component';
import { ProfilComponent } from './user/profil/profil.component';
import { UserComponent } from './user/user.component';
import { UserGuard } from './user.guard';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: { title: '🏡 Accueil', animation: home },
      },
      {
        path: 'recip',
        component: RecipComponent,
        data: { title: '🥘 Recette', animation: fade },
        canActivate: [UserGuard],
      },
      {
        path: 'calendar',
        component: CalendarComponent,
        data: { title: '📅 Calendrier', animation: fade },
        canActivate: [UserGuard],
      },
      {
        path: 'profil',
        component: ProfilComponent,
        data: { title: '👤 Mon Profil', animation: fade },
      },
      {
        path: 'setting',
        canActivate: [UserGuard],
        children: [
          { path: '', redirectTo: '/root/home', pathMatch: 'full' },
          {
            path: 'users',
            component: UserComponent,
            data: { title: '⚙️👥 Configuration', animation: fade },
          },
          {
            path: 'profil',
            component: ProfilComponent,
            data: { title: '⚙️👤 Configuration', animation: fade },
          },
          {
            path: 'recip',
            component: RecipListComponent,
            data: { title: '⚙️🥘 Configuration', animation: fade },
          },
        ],
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
