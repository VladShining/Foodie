import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from 'src/app/service/menu.service';
import { Recip } from './utils/recip';

@Component({
  selector: 'app-recip',
  templateUrl: './recip.component.html',
  styleUrls: ['./recip.component.scss'],
})
export class RecipComponent implements OnInit {
  constructor(route: ActivatedRoute, menuService: MenuService) {
    menuService.setTitle(route.snapshot.data['title']);
    menuService.changeTitle(route.snapshot.data['title']);
  }

  ngOnInit(): void {}
}
