import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MenuService } from 'src/app/service/menu.service';
import { UserRegisterService } from 'src/app/pages/root/user/user.register.service';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
})
export class SharedComponent implements OnInit
{
  title: string;
  list: object[];
  menue: boolean;
  time: string;
  isUserExist: boolean;

  constructor(private menuService: MenuService, route: ActivatedRoute, public user: UserRegisterService)
  {
    this.menue = false;
    this.isUserExist = true;
    this.list = this.menuService.menu;
    setInterval(() =>
    {
      const date = new Date();
      this.time = date.toLocaleTimeString();
    }, 1000);
    clearInterval(2000);
  }

  toogleMenu(): void
  {
    this.menue = !this.menue;
  }
  ngOnInit(): void
  {
    this.changeTitle();
    // setInterval(() =>
    // {
    //   this.isUserExist = this.user.isExist;

    // }, 1000)
    // clearInterval(2000);


  }
  // ngOnChanges(changes: import("@angular/core").SimpleChanges): void
  // {
  //   this.isUserExist = this.user.isExist;
  // }

  changeTitle()
  {
    setTimeout(() =>
    {
      this.title = this.menuService.getTitle();
    }, 200);
  }
}
