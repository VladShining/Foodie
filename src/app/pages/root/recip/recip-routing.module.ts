import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipListComponent } from './components/recip-list/recip-list.component';
import { RecipViewComponent } from './components/recip-view/recip-view.component';

const routes: Routes = [
  { path: '', component: RecipViewComponent },
  { path: 'all', component: RecipListComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipRoutingModule {}
