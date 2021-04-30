import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';
import { RecipListComponent } from './recip-list/recip-list.component';
import { RecipComponent } from './recip/recip.component';
import { RootComponent } from './root.component';
import { ProfilComponent } from './user/profil/profil.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: { title: '🏡 Accueil' },
      },
      {
        path: 'recip',
        component: RecipComponent,
        data: { title: '🥘 Recette' },
      },
      {
        path: 'calendar',
        component: CalendarComponent,
        data: { title: '🗓️ Calendrier' },
      },
      {
        path: 'profil',
        component: ProfilComponent,
        data: { title: '👤 Mon Profil' },
      },
      {
        path: 'setting',
        children: [
          { path: '', redirectTo: '/root/home', pathMatch: 'full' },
          {
            path: 'users',
            component: UserComponent,
            data: { title: '⚙️👥 Configuration' },
          },
          {
            path: 'profil',
            component: ProfilComponent,
            data: { title: '⚙️👤 Configuration' },
          },
          {
            path: 'recip',
            component: RecipListComponent,
            data: { title: '⚙️🥘 Configuration' },
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
