import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainFormComponent } from './components/main-form/main-form.component';
import { MainNewsComponent } from './components/main-news/main-news.component';
import { MainListComponent } from './components/main-list/main-list.component';
import { MainContainerComponent } from './components/main-container/main-container.component';


@NgModule({
  declarations: [
    MainFormComponent,
    MainNewsComponent,
    MainListComponent,
    MainContainerComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
