import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from 'src/app/service/menu.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  lists: any;
  @Output() data = new EventEmitter<string>();

  constructor(public route: ActivatedRoute, menuService: MenuService) {
    menuService.setTitle(route.snapshot.data['title']);
    menuService.changeTitle(route.snapshot.data['title']);
    this.data = route.snapshot.data['title'];
  }

  ngOnInit(): void {}
}
