import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipContainerComponent } from './components/recip-container/recip-container.component';

const routes: Routes = [
  { path: '', component: RecipContainerComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipRoutingModule {}
