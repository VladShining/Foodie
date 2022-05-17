import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { firebaseAuth } from 'src/environments/firebase';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.3s ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.3s ease-in', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class NavbarComponent implements OnInit {
  @Input() title!: string;
  @Input() user!: any;
  currentUser: any;
  @Input() isPub!: boolean;
  isOpen: boolean = false;
  constructor() {}
  logoSrc!: string;
  picture!: string;
  menu: string = '/assets/icons/72.png';
  ngOnInit(): void {
    this.currentUser = firebaseAuth().currentUser;
    this.logoSrc = '/assets/images/Placeholder.png';
    this.picture =
      this.currentUser?.photoURL || '/assets/icons/svg/single-01.svg';
  }
  toogleMenu() {
    this.isOpen = !this.isOpen;
  }
}
