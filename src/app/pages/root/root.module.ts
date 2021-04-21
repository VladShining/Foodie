import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootRoutingModule } from './root-routing.module';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { RecipComponent } from './recip/recip.component';
import { RootComponent } from './root.component';
import { SharedComponent } from 'src/app/component/shared/shared.component';

@NgModule({
  declarations: [
    HomeComponent,
    RecipComponent,
    UserComponent,
    RootComponent,
    SharedComponent,
  ],
  imports: [CommonModule, RootRoutingModule],
  bootstrap: [RootComponent],
})
export class RootModule {}
