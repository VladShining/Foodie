import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarFormComponent } from './components/calendar-form/calendar-form.component';
import { CalendarContainer } from './components/container/calendar.container';

const routes: Routes = [
  { path: '', component: CalendarContainer },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarRoutingModule {}
