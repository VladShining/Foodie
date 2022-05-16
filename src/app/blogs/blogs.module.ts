import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsFormComponent } from './components/blogs-form/blogs-form.component';
import { BlogsListComponent } from './components/blogs-list/blogs-list.component';
import { BlogsDetailComponent } from './components/blogs-detail/blogs-detail.component';
import { BlogsContainerComponent } from './components/blogs-container/blogs-container.component';


@NgModule({
  declarations: [
    BlogsFormComponent,
    BlogsListComponent,
    BlogsDetailComponent,
    BlogsContainerComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule
  ]
})
export class BlogsModule { }
