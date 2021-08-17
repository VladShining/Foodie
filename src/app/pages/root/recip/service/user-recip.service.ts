import { Injectable } from '@angular/core';
import { firebaseStore } from 'src/environments/firebase';

@Injectable()
export class UserRecipService {
  constructor() {}
  async getUserRecip(userId: string) {
    let recip: any[] = [];
    await firebaseStore()
      .collection('recip')
      .where('id', '==', userId)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          recip.push(doc.data());
          // console.log(doc.id, ' => ', doc.data());
        });
      })
      .catch();
    return recip;
  }
  async getRecip(recipId: any) {
    return firebaseStore()
      .collection('recip')
      .doc(recipId)
      .get()
      .then((recip) => recip.data())
      .catch();
  }
}
