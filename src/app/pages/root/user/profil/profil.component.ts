import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from 'firebase';
import 'firebase/auth';
import { MenuService } from 'src/app/service/menu.service';
import { UserRegisterService } from '../user.register.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit
{
  showMe: boolean;
  input: boolean;
  userForm: FormGroup;
  mail: string;

  constructor(
    private formBuilder: FormBuilder,
    route: ActivatedRoute,
    menuService: MenuService,
    public user: UserRegisterService,
    public router: Router
  )
  {
    this.showMe = false;
    menuService.setTitle(route.snapshot.data['title']);
    this.mail = firebase.auth().currentUser && firebase.auth().currentUser.email || 'vous etes hors ligne';
  }
  toggleShow()
  {
    this.input = !this.input;
  }
  initForm()
  {
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
  ngOnInit(): void
  {
    this.initForm();
  }
  onSubmit()
  {
    if (this.userForm.get('email').value !== this.mail)
      console.log('dont change mail');
    else
    {
      const userName = this.userForm.get('name').value;
      const userLastName = this.userForm.get('lastname').value;
      const userMail = this.userForm.get('email').value;
      const userPhone = this.userForm.get('numberphone').value;
      const userPassword = this.userForm.get('password').value;
      this.user.registerUser(userName, userLastName, userPassword, userPhone, userMail);
      // this.router.parseUrl()
      this.router.navigate(['/root']);

    }
  }
}
