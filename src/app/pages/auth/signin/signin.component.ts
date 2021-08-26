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
  spin: string = 'fire';
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
    this.randomSpin();
    this.spinner.show();
    const email = this.signInForm.get('email')?.value;
    const password = this.signInForm.get('password')?.value;
    this.authService.signInUser(email, password).then(
      () => {
        this.router.navigate(['/root']);
        this.authService.collectDataFromFirebase();
        this.spinner.hide();
      },
      () => {
        this.spinner.hide();
        this.errorMessages = 'Login invalid';
      }
    );
  }
  randomSpin() {
    const spins = [
      'square-jelly-box',
      'ball-8bits',
      'ball-atom',
      'ball-beat',
      'ball-circus',
      'ball-climbing-dot',
      'ball-clip-rotate',
      'ball-clip-rotate-multiple',
      'ball-clip-rotate-pulse',
      'ball-elastic-dots',
      'ball-fall',
      'ball-fussion',
      'ball-grid-beat',
      'ball-grid-pulse',
      'ball-newton-cradle',
      'ball-pulse',
      'ball-pulse-rise',
      'ball-pulse-sync',
      'ball-rotate',
      'ball-running-dots',
      'ball-scale',
      'ball-scale-multiple',
      'ball-scale-pulse',
      'ball-scale-ripple',
      'ball-scale-ripple-multiple',
      'ball-spin',
      'ball-spin-clockwise',
      'ball-spin-clockwise-fade',
      'ball-spin-clockwise-fade-rotating',
      'ball-spin-fade',
      'ball-spin-fade-rotating',
      'ball-spin-rotate',
      'ball-square-clockwise-spin',
      'ball-square-spin',
      'ball-triangle-path',
      'ball-zig-zag',
      'ball-zig-zag-deflect',
      'cube-transition',
      'fire',
      'line-scale',
      'line-scale-party',
      'timer',
    ];
    this.spin = spins[Math.floor(Math.random() * spins.length)];
  }
}
