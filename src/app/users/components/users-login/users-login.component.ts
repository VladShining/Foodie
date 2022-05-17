import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-login',
  templateUrl: './users-login.component.html',
  styleUrls: ['./users-login.component.scss'],
})
export class UsersLoginComponent implements OnInit {
  constructor(private user: UsersService) {}

  ngOnInit(): void {}
  loginUser() {
    this.user.loginUser();
  }
}
