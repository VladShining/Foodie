import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesContainerComponent } from './components/sales-container/sales-container.component';

const routes: Routes = [
  { path: '', component: SalesContainerComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesRoutingModule {}
