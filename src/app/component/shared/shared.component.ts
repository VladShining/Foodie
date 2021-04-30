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
  observeTitle: Observable<any>;

  constructor(private menuService: MenuService, route: ActivatedRoute) {
    this.menue = false;
    this.list = this.menuService.menu;
  }

  toogleMenu(): void {
    this.menue = !this.menue;
  }
  ngOnInit(): void {
    this.observeTitle = new Observable((observer) => {
      setInterval(() => {
        observer.next(console.log('obs'));
      }),
        1000;
    });
    this.observeTitle.subscribe((res) => {
      this.title = res;
    });
    this.title = this.menuService.outtitle;
  }
}
