import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarFormComponent } from './components/calendar-form/calendar-form.component';
import { CalendarGridComponent } from './components/calendar-grid/calendar-grid.component';
import { CalendarContainer } from './components/container/calendar.container';

const routes: Routes = [
  { path: 'calendar', component: CalendarContainer },
  { path: '', component: CalendarFormComponent },
  { path: 'newTask', component: CalendarGridComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarRoutingModule {}
