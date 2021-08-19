import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import firebase from 'firebase/app';
import 'firebase/auth';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  src: string = '../../../../assets/images/!visibility.svg';
  signUpForm!: FormGroup;
  errorMessages!: string;
  input!: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }
  toogleEye() {
    this.input
      ? (this.src = '../../../../assets/images/visibility.svg')
      : (this.src = '../../../../assets/images/!visibility.svg');
  }
  toggleShow() {
    this.input = !this.input;
    this.toogleEye();
  }
  initForm() {
    this.signUpForm = this.formBuilder.group({
      // id: ['', [Validators.required, Validators.min(99999)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)],
      ],
    });
  }
  onSubmit() {
    // const id = this.signUpForm.get('id').value;
    this.spinner.show();
    const email = this.signUpForm.get('email')?.value;
    const password = this.signUpForm.get('password')?.value;
    // if (id === 493649 || id === 238649 || id === 384857)
    this.authService.createNewUser(email, password).then(
      () => {
        this.authService.registerNewUser(
          email,
          password,
          firebase.auth().currentUser?.uid
        );
        this.router.navigate(['/root']);
        this.spinner.hide();
      },
      (errors) => {
        this.errorMessages = 'Une erreur est survenue !';
        this.spinner.hide();
      }
    );
    // else
    // {
    // this.errorMessages = 'Une erreur est survenue !';
    // }
  }
  registerUserData() {
    console.log(firebase.auth().currentUser?.uid);
  }
}
