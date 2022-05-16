import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterContainerComponent } from './components/enter-container/enter-container.component';

const routes: Routes = [
  { path: '', component: EnterContainerComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntertainmentRoutingModule {}
