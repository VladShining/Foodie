import { Component, OnInit } from '@angular/core';
import { firebaseAuth } from 'src/environments/firebase';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  constructor(private user: UsersService) {}

  ngOnInit(): void {}
  logout() {
    this.user.logoutUser();
  }
}
