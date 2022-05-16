import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesContainerComponent } from './components/sales-container/sales-container.component';
import { SalesListComponent } from './components/sales-list/sales-list.component';
import { SalesFormComponent } from './components/sales-form/sales-form.component';
import { SalesDetailComponent } from './components/sales-detail/sales-detail.component';


@NgModule({
  declarations: [
    SalesContainerComponent,
    SalesListComponent,
    SalesFormComponent,
    SalesDetailComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule
  ]
})
export class SalesModule { }
