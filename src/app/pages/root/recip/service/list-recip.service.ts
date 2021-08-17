import { Injectable } from '@angular/core';
import { firebaseAuth } from 'src/environments/firebase';
import { firebaseStore } from 'src/environments/firebase';
import { Recip } from '../utils/recip';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ListRecipService {
  constructor() {}

  createRecip(recip: Recip) {
    const recipId = uuidv4();
    const userId = firebaseAuth().currentUser?.uid;
    firebaseStore()
      .collection('recip')
      .doc(recipId)
      .set({ ...recip, id: userId }, { merge: true })
      .then(() => {})
      .catch();
  }
  async getRecip(recipId: any) {
    return firebaseStore()
      .collection('recip')
      .doc(recipId)
      .get()
      .then((recip) => recip.data())
      .catch();
  }
  async getAllRecip() {
    let allRecip: any[] = [];
    (await firebaseStore().collection('recip').get()).forEach((recip) => {
      allRecip.push(recip.data());
    });
    return allRecip;
  }
}
