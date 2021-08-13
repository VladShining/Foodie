import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootRoutingModule } from './root-routing.module';
import { RootComponent, RootNavComponent } from './root.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RootComponent, RootNavComponent],
  imports: [CommonModule, RootRoutingModule, FormsModule],
})
export class RootModule {}
