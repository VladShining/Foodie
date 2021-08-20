import { Injectable } from '@angular/core';
import { firebaseAuth, firebaseStore } from 'src/environments/firebase';

@Injectable()
export class UserContactService {
  constructor() {}
  async getCurrentUserProfil() {
    const currentUserId = firebaseAuth().currentUser?.uid;
    let currentUserContact: any;
    await firebaseStore()
      .collection('contacts')
      ?.doc(currentUserId)
      .get()
      .then((user) => {
        currentUserContact = user.data();
      });
    return currentUserContact;
  }
}
