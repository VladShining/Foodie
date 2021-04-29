import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { LoaderService } from 'src/app/service/loader.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../signin/signin.component.scss'],
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  errorMessages: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public loader: LoaderService,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signUpForm = this.formBuilder.group({
      name: [''],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)],
      ],
    });
  }
  onSubmit() {
    this.loader.isLoading = true;
    const name = this.signUpForm.get('name').value;
    const email = this.signUpForm.get('email').value;
    const password = this.signUpForm.get('password').value;
    this.authService.createNewUser(email, password).then(
      () => {
        this.router.navigate(['/root']);
        this.loader.isLoading = false;
      },
      (errors) => {
        this.errorMessages = 'Une erreur est survenue !';
        this.loader.isLoading = false;
      }
    );
  }
}