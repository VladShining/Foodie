import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { firebaseAuth, fireGoogleAuth } from 'src/environments/firebase';

@Injectable()
export class UsersService {
  constructor(private router: Router, private ngZone: NgZone) {}

  loginUser() {
    const user = firebaseAuth().currentUser;
    if (!user)
      fireGoogleAuth().then(() => {
        setTimeout(() => this.router.navigate(['users', 'profil']), 200);
      });
    else this.router.navigate(['users', 'profil']);
  }
  logoutUser() {
    firebaseAuth()
      .signOut()
      .then(() => this.router.navigate(['']));
  }
}
