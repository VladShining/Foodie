import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import { RootRoutingModule } from './root-routing.module';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { RecipComponent } from './recip/recip.component';
import { RootComponent } from './root.component';
import { SharedComponent } from 'src/app/component/shared/shared.component';
import { LoaderComponent } from 'src/app/component/loader/loader.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FooterComponent } from 'src/app/component/footer/footer.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Title } from '@angular/platform-browser';
import { CalendarComponent } from './calendar/calendar.component';
import { RecipListComponent } from './recip-list/recip-list.component';
import { ProfilComponent } from './user/profil/profil.component';
import { CalendarCdk } from './calendar/component/calendar-cdk.component';
import { Cdrop } from './calendar/component/cdrop.component';
import { MatListModule } from '@angular/material/list';
import { FormComponent } from './recip/form/form.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

FullCalendarModule.registerPlugins([
  // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
]);

@NgModule({
  declarations: [
    // Cdrop,
    // CalendarCdk,
    CalendarComponent,
    FooterComponent,
    LoaderComponent,
    HomeComponent,
    RecipComponent,
    UserComponent,
    RootComponent,
    RecipListComponent,
    ProfilComponent,
    RecipListComponent,
    SharedComponent,
    FormComponent,
  ],
  providers: [Title],
  imports: [
    ScrollingModule,
    MatListModule,
    CommonModule,
    RootRoutingModule,
    // MatProgressBarModule,
    MatCheckboxModule,
    DragDropModule,
    FullCalendarModule,
    MatProgressSpinnerModule,
  ],
  bootstrap: [RootComponent],
})
export class RootModule {}
