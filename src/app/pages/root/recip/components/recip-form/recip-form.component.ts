import { Component, OnInit, ViewChild } from '@angular/core';
import { Form } from '@angular/forms';
import { ModalComponent } from 'angular-custom-modal/modal.component';
import { ListRecipService } from '../../service/list-recip.service';
import 'cleave.js/dist/cleave.js';
declare var Cleave: any;

@Component({
  selector: 'app-recip-form',
  templateUrl: './recip-form.component.html',
  styleUrls: ['./recip-form.component.scss'],
})
export class RecipFormComponent implements OnInit {
  cleave1!: string;
  cleave2!: string;
  cleave: any;
  allcategory: string[] = [''];
  category!: string;
  ingredient: string[] = [];
  show(ref: string) {
    console.log(ref);
  }
  @ViewChild('successSave') successSave: ModalComponent | undefined;
  @ViewChild('recip') recip: Form | undefined;
  constructor(private recipService: ListRecipService) {}

  ngOnInit(): void {
    // (<HTMLInputElement>document.getElementById('time1')).value = '00:00';
    new Cleave('#time1', {
      time: true,
      timePattern: ['h', 'm'],
    });
    new Cleave('#time2', {
      time: true,
      timePattern: ['h', 'm'],
    });
    this.recipService.getAllCategory().then((e) => (this.allcategory = e));
  }
  onSubmit(recip: any) {
    // this.recipService.createRecip(recip.value);
    console.log(recip);
    this.successSave?.open();
  }
}
