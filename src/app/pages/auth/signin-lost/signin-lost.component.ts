import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalComponent } from 'angular-custom-modal';
import firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
  selector: 'app-signin-lost',
  templateUrl: './signin-lost.component.html',
  styleUrls: ['./signin-lost.component.scss'],
})
export class SigninLostComponent implements OnInit {
  resign!: FormGroup;
  @ViewChild('submitSuccess') submitSuccess: ModalComponent | undefined;
  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.resign = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  retour() {
    this.router.navigate(['/root']);
  }
  onSubmit() {
    const email = this.resign.get('email')?.value;
    firebase
      .firestore()
      .collection('mail')
      .doc(email)
      .set({})
      .then(() => this.submitSuccess?.open());
  }
}
