import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarFormComponent } from './components/calendar-form/calendar-form.component';
import { CalendarContainer } from './components/container/calendar.container';

FullCalendarModule.registerPlugins([
  // register FullCalendar plugins
  listPlugin,
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin,
]);
@NgModule({
  declarations: [CalendarFormComponent, CalendarContainer],
  imports: [CommonModule, FullCalendarModule, CalendarRoutingModule],
})
export class CalendarModule {}
