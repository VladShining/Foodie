import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../interface/user';
import { UserProfilService } from '../../services/user-profil.service';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss'],
})
export class UserProfilComponent implements OnInit {
  user: User;
  editMode: boolean = false;
  constructor(private userProfil: UserProfilService) {
    this.user = this.userProfil.getCurrentUserProfil();
  }

  ngOnInit(): void {}
  editUser() {
    this.editMode = true;
    console.log('modifier');
  }
  saveUser() {
    this.editMode = false;
    console.log('sauvegarde effectuer');
  }
}
