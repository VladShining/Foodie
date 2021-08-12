import { Component, OnInit } from '@angular/core';
import { User } from '../../interface/user';
import { UserProfilService } from '../../services/user-profil.service';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss'],
})
export class UserProfilComponent implements OnInit {
  user: User;
  constructor(private userProfil: UserProfilService) {
    this.user = this.userProfil.getCurrentUserProfil();
  }

  ngOnInit(): void {}
}
