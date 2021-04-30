import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
})
export class SharedComponent implements OnInit {
  title: string;
  list: object[];
  authStatus: boolean;
  isHome: boolean;
  menue: boolean;

  constructor(private menuService: MenuService, route: ActivatedRoute) {
    this.menue = false;
    this.list = this.menuService.menu;
  }

  toogleMenu(): void {
    this.menue = !this.menue;
  }
  ngOnInit(): void {
    this.changeTitle();
  }
  changeTitle() {
    setTimeout(() => {
      this.title = this.menuService.getTitle();
    }, 200);
  }
}
