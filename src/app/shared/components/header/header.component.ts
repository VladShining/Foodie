import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Titre';
  user: any = {
    name: 'ruddy',
    id: 49,
  };
  pub: boolean = true;
  constructor() {}

  ngOnInit(): void {
    this.title = 'Sakafo';
    this.initPub();
  }
  initPub() {
    setTimeout(() => {
      this.pub = false;
    }, 2000);
  }
}
