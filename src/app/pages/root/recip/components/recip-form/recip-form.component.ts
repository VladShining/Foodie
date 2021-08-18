import { Component, OnInit, ViewChild } from '@angular/core';
import { Form } from '@angular/forms';
import { ModalComponent } from 'angular-custom-modal/modal.component';
import { ListRecipService } from '../../service/list-recip.service';

@Component({
  selector: 'app-recip-form',
  templateUrl: './recip-form.component.html',
  styleUrls: ['./recip-form.component.scss'],
})
export class RecipFormComponent implements OnInit {
  @ViewChild('successSave') successSave:
    | ModalComponent
    | undefined;
  @ViewChild('recip') recip: Form | undefined;
  constructor(private recipService: ListRecipService) {}

  ngOnInit(): void {
  
  }
  onSubmit(recip: any) {
    this.recipService.createRecip(recip.value);
    this.successSave?.open();
  }
}
