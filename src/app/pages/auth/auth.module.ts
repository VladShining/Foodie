import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoaderService } from 'src/app/service/loader.service';

@NgModule({
  declarations: [SigninComponent, SignupComponent],
  providers: [LoaderService],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AuthRoutingModule,
    MatProgressBarModule,
  ],
})
export class AuthModule {}
