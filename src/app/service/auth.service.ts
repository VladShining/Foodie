import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isAuth = false;
  constructor() {}
  createNewUser(email: string, password: string) {
    return new Promise<void>((res, rej) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(
          () => {
            res();
          },
          (e) => {
            rej(e);
          }
        );
    });
  }

  signInUser(email: string, password: string): any {
    return new Promise<void>((res, rej) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(
          () => {
            res();
          },
          (e) => {
            rej(e);
          }
        );
    });
  }

  signOutUser() {
    firebase.auth().signOut();
  }
}
