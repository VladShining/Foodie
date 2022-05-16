import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsContainerComponent } from './components/blogs-container/blogs-container.component';

const routes: Routes = [
  {
    path: '',
    component: BlogsContainerComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogsRoutingModule {}
