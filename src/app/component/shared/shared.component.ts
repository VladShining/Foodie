import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
})
export class SharedComponent implements OnInit {
  list: object[];
  authStatus: boolean;
  title: string;
  isHome: boolean;
  menue: boolean;
  constructor(private menuService: MenuService) {
    this.menue = false;
    this.list = this.menuService.menu;
  }

  toogleMenu(): void {
    this.menue = !this.menue;
  }
  ngOnInit(): void {
    this.title = this.menuService.menu[1].label;
  }
}
