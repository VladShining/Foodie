import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootRoutingModule } from './root-routing.module';
import { RootComponent } from './components/root/root.component';
import { RootService } from './services/root.service';

@NgModule({
  declarations: [RootComponent],
  imports: [CommonModule, RootRoutingModule],
  providers: [RootService],
})
export class RootModule {}
