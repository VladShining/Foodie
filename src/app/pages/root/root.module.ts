import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootRoutingModule } from './root-routing.module';
import { RootComponent, RootNavComponent } from './root.component';

@NgModule({
  declarations: [RootComponent, RootNavComponent],
  imports: [CommonModule, RootRoutingModule],
})
export class RootModule {}
