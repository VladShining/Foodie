import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() title!: string;
  @Input() user!: any;
  @Input() isPub!: boolean;
  isOpen: boolean = false;
  constructor() {}
  logoSrc!: string;
  picture!: string;
  menu: string = '/assets/icons/72.png';
  ngOnInit(): void {
    this.logoSrc = '/assets/images/Placeholder.png';
    this.picture = '/assets/images/Placeholder.png';
  }
  toogleMenu() {
    this.isOpen = !this.isOpen;
  }
  quitMenu() {
    setTimeout(() => {
      this.isOpen = false;
    }, 1000);
  }
}
