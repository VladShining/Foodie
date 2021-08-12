import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { firebaseAuth, firebaseStore } from 'src/environments/firebase';
import { User } from '../interface/user';

@Injectable()
export class UserProfilService {
  user: User;
  constructor(private auth: AuthService) {
    this.user = { firstName: '', email: '', password: '', lastName: '' };
  }

  getCurrentUserProfil() {
    const userId = firebaseAuth().currentUser?.uid;
    this.user.email = firebaseAuth().currentUser?.email || '';

    firebaseStore()
      .collection('users')
      .doc(userId)
      .get()
      .then((res) => {
        this.user.password = res.data()?.password;
      });
    return this.user;
  }
}
