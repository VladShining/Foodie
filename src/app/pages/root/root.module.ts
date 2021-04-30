import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootRoutingModule } from './root-routing.module';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { RecipComponent } from './recip/recip.component';
import { RootComponent } from './root.component';
import { SharedComponent } from 'src/app/component/shared/shared.component';
import { LoaderComponent } from 'src/app/component/loader/loader.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FooterComponent } from 'src/app/component/footer/footer.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Title } from '@angular/platform-browser';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

FullCalendarModule.registerPlugins([
  // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
]);

@NgModule({
  declarations: [
    FooterComponent,
    LoaderComponent,
    HomeComponent,
    RecipComponent,
    UserComponent,
    RootComponent,
    SharedComponent,
  ],
  providers: [Title],
  imports: [
    CommonModule,
    RootRoutingModule,
    MatProgressBarModule,
    MatCheckboxModule,
    DragDropModule,
    FullCalendarModule,
  ],
  bootstrap: [RootComponent],
})
export class RootModule {}
