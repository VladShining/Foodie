import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
})
export class SharedComponent implements OnInit {
  authStatus: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.authStatus = true;
      } else {
        this.authStatus = false;
      }
    });
  }
  onSignOut() {
    this.authService.signOutUser();
  }
}
