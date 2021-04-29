import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootRoutingModule } from './root-routing.module';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { RecipComponent } from './recip/recip.component';
import { RootComponent } from './root.component';
import { SharedComponent } from 'src/app/component/shared/shared.component';
import { LoaderComponent } from 'src/app/component/loader/loader.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FooterComponent } from 'src/app/component/footer/footer.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete/autocomplete-module';

@NgModule({
  declarations: [
    FooterComponent,
    LoaderComponent,
    HomeComponent,
    RecipComponent,
    UserComponent,
    RootComponent,
    SharedComponent,
  ],
  providers: [],
  imports: [
    CommonModule,
    RootRoutingModule,
    MatProgressBarModule,
    MatCheckboxModule,
    // MatAutocompleteModule,
  ],
  bootstrap: [RootComponent],
})
export class RootModule {}
