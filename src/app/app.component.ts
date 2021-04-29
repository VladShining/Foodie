import { Component } from '@angular/core';
import {
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
  RouterEvent,
} from '@angular/router';
import firebase from 'firebase';
import firebaseConfig from './env';

@Component({
  selector: 'app-root',
  template: `<router-outlet
    ><span *ngIf="isloading">loading....</span></router-outlet
  >`,
  styleUrls: ['./styles/index.scss'],
})
export class AppComponent {
  isloading: boolean;
  constructor(router: Router) {
    this.isloading = false;
    router.events.subscribe((event: RouterEvent) => {
      if (event instanceof RouteConfigLoadStart) {
        this.isloading = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.isloading = false;
      }
    });
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    console.clear(); //////////////////////////////////////////////
  }
}
