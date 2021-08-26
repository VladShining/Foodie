import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { firebaseAuth, firebaseStore } from 'src/environments/firebase';
import { User } from '../interface/user';

@Injectable()
export class UserProfilService {
  user: User;
  constructor(private auth: AuthService) {
    this.user = {
      firstName: '',
      email: '',
      password: '',
      lastName: '',
      adresse: '',
      numero: [''],
      citation: '',
      perso: '',
    };
    this.initUser();
  }
  initUser() {
    const userId = firebaseAuth().currentUser?.uid;
    firebaseStore()
      .collection('users')
      ?.doc(userId)
      .get()
      .then((user) => {
        // userId && sessionStorage.setItem(userId, JSON.stringify(user.data()));
      });
  }
  getUserProfilOnStorage(UserId: any) {
    const user = JSON.parse(sessionStorage.getItem(UserId) || '');
  }
  async getCurrentUserProfil() {
    const currentUserId = firebaseAuth().currentUser?.uid;
    let currentUser: any;
    await firebaseStore()
      .collection('users')
      ?.doc(currentUserId)
      .get()
      .then((user) => {
        currentUser = user.data();
      });
    return currentUser;
  }

  saveUser(
    firstName: string,
    lastName: string,
    numero: string[],
    adresse: string,
    citation: string,
    perso: string
  ) {
    firebaseStore()
      .collection('users')
      .doc(firebaseAuth().currentUser?.uid)
      .set(
        { firstName, lastName, numero, adresse, citation, perso },
        { merge: true }
      )
      .then()
      .catch();
  }
}
