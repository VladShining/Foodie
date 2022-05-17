import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootContainerComponent } from './components/root-container/root-container.component';
import { RootComponent } from './components/root/root.component';

const routes: Routes = [
  {
    path: '',
    component: RootContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RootRoutingModule {}
