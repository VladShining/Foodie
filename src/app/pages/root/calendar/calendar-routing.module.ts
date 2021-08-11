import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarFormComponent } from './components/calendar-form/calendar-form.component';

const routes: Routes = [
  { path: '', component: CalendarFormComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarRoutingModule {}
