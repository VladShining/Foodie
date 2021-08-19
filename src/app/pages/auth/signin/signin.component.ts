import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  src: string = '../../../../assets/images/!visibility.svg';
  signInForm!: FormGroup;
  errorMessages!: string;
  showPassword!: boolean;
  input!: boolean;
  showMe!: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
    this.showMe = false;
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
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
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
    this.spinner.show();
    const email = this.signInForm.get('email')?.value;
    const password = this.signInForm.get('password')?.value;
    this.authService.signInUser(email, password).then(
      () => {
        this.router.navigate(['/root']);
        this.spinner.hide();
      },
      () => {
        this.spinner.hide();
        this.errorMessages = 'Login invalid';
      }
    );
  }
}
