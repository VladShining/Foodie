import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntertainmentRoutingModule } from './entertainment-routing.module';
import { EnterFormComponent } from './components/enter-form/enter-form.component';
import { EnterListComponent } from './components/enter-list/enter-list.component';
import { EnterDetailComponent } from './components/enter-detail/enter-detail.component';
import { EnterContainerComponent } from './components/enter-container/enter-container.component';


@NgModule({
  declarations: [
    EnterFormComponent,
    EnterListComponent,
    EnterDetailComponent,
    EnterContainerComponent
  ],
  imports: [
    CommonModule,
    EntertainmentRoutingModule
  ]
})
export class EntertainmentModule { }
