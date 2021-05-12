import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import firebase from 'firebase';
import 'firebase/auth';
import { AuthService } from 'src/app/service/auth.service';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  showMe: boolean;
  input: boolean;
  userForm: FormGroup;
  mail: string;

  constructor(
    private formBuilder: FormBuilder,
    route: ActivatedRoute,
    menuService: MenuService
  ) {
    this.showMe = false;
    menuService.setTitle(route.snapshot.data['title']);
    this.mail = firebase.auth().currentUser.email;
  }
  toggleShow() {
    this.input = !this.input;
  }
  initForm() {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      numberphone: [
        '',
        [
          Validators.required,
          Validators.min(320000100),
          Validators.max(350000000),
        ],
      ],
      email: [this.mail],
      password: [
        '',
        [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)],
      ],
    });
  }
  ngOnInit(): void {
    this.initForm();
  }
  onSubmit() {
    if (this.userForm.get('email').value !== this.mail)
      console.log('dont change mail');
    else {
    }
  }
}
