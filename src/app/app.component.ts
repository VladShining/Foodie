import { Component } from '@angular/core';
import firebase from 'firebase';
import firebaseConfig from './env';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./styles/index.css'],
})
export class AppComponent {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    console.clear(); //////////////////////////////////////////////
  }
}
