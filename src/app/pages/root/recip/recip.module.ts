import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipRoutingModule } from './recip-routing.module';
import { RecipFormComponent } from './components/recip-form/recip-form.component';
import { RecipListComponent } from './components/recip-list/recip-list.component';
import { RecipViewComponent } from './components/recip-view/recip-view.component';
import { ModalModule } from 'angular-custom-modal';
import { ListRecipService } from './service/list-recip.service';
import { UserRecipService } from './service/user-recip.service';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [RecipFormComponent, RecipListComponent, RecipViewComponent],
  imports: [
    CommonModule,
    RecipRoutingModule,
    ModalModule,
    FormsModule,
    NgSelectModule,
  ],
  providers: [ListRecipService, UserRecipService],
})
export class RecipModule {}
