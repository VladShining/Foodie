import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { LoaderService } from 'src/app/service/loader.service';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  signInForm: FormGroup;
  errorMessages: string;
  showPassword: boolean;
  input: boolean;
  showMe: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    public loader: LoaderService,
    private router: Router,
    route: ActivatedRoute,
    menuService: MenuService
  ) {
    this.showMe = false;
    menuService.setTitle(route.snapshot.data['title']);
  }
  ngOnInit() {
    this.initForm();
  }
  toggleShow() {
    this.input = !this.input;
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
  onSubmit() {
    this.loader.isLoading = true;
    const email = this.signInForm.get('email').value;
    const password = this.signInForm.get('password').value;
    this.authService.signInUser(email, password).then(
      () => {
        this.router.navigate(['/root']);
        this.loader.isLoading = false;
      },
      (errors) => {
        this.errorMessages = 'Login invalid';
        this.loader.isLoading = false;
        document.getElementById('email').style.color = 'red';
        document.getElementById('password').style.color = 'red';
        console.clear();
      }
    );
  }
}
