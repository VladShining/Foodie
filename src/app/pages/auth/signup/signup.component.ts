import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { LoaderService } from 'src/app/service/loader.service';
import { MenuService } from 'src/app/service/menu.service';

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
    private authService: AuthService,
    route: ActivatedRoute,
    menuService: MenuService
  ) {
    menuService.setTitle(route.snapshot.data['title']);
  }
  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signUpForm = this.formBuilder.group({
      id: ['', [Validators.required, Validators.min(99999)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)],
      ],
    });
  }
  onSubmit() {
    this.loader.isLoading = true;
    const id = this.signUpForm.get('id').value;
    const email = this.signUpForm.get('email').value;
    const password = this.signUpForm.get('password').value;
    if (id === 493649 || id === 238649 || id === 384857)
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
    else {
      this.errorMessages = 'Une erreur est survenue !';
      this.loader.isLoading = false;
    }
  }
}
