import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootRoutingModule } from './root-routing.module';
import { Menu, RootComponent, RootNavComponent } from './root.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'angular-custom-modal';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [RootComponent, RootNavComponent, Menu],
  imports: [
    CommonModule,
    RootRoutingModule,
    FormsModule,
    NgSelectModule,
    ModalModule,
  ],
})
export class RootModule {}
