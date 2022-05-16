import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipRoutingModule } from './recip-routing.module';
import { RecipFormComponent } from './components/recip-form/recip-form.component';
import { RecipListComponent } from './components/recip-list/recip-list.component';
import { RecipDetailComponent } from './components/recip-detail/recip-detail.component';
import { RecipNewsComponent } from './components/recip-news/recip-news.component';
import { RecipContainerComponent } from './components/recip-container/recip-container.component';


@NgModule({
  declarations: [
    RecipFormComponent,
    RecipListComponent,
    RecipDetailComponent,
    RecipNewsComponent,
    RecipContainerComponent
  ],
  imports: [
    CommonModule,
    RecipRoutingModule
  ]
})
export class RecipModule { }
