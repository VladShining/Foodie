import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app component works';
  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyA6x2ee0aGwFAwfCFV87R_S3B8JaQxOrUk',
      authDomain: 'foodie-49.firebaseapp.com',
      projectId: 'foodie-49',
      storageBucket: 'foodie-49.appspot.com',
      messagingSenderId: '1073473852060',
      appId: '1:1073473852060:web:2c3636f76286245d961359',
      measurementId: 'G-HQ91BZESE3',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
