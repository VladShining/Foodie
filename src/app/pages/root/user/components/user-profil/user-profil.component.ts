import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'angular-custom-modal';
import { User } from '../../interface/user';
import { UserProfilService } from '../../services/user-profil.service';
import { firebaseAuth, firebaseStore } from 'src/environments/firebase';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss'],
})
export class UserProfilComponent implements OnInit {
  user: User;
  people: string[] = [
    'Empathique',
    'Travaillomane',
    'Persévérant',
    'Promoteur',
    'Rêveur',
    'Rebelle',
  ];
  numero = [];
  perso = '';
  editMode: boolean = false;
  constructor(private userProfil: UserProfilService) {
    this.user = {
      email: '',
      firstName: '',
      lastName: '',
      password: '******',
      adresse: '',
      numero: [''],
      citation: '',
    };
  }
  @ViewChild('firstName') firstName: ElementRef | undefined;
  @ViewChild('lastName') lastName: ElementRef | undefined;
  // @ViewChild('numero') numero: ElementRef | undefined;
  @ViewChild('adresse') adresse: ElementRef | undefined;
  @ViewChild('citation') citation: ElementRef | undefined;
  @ViewChild('pass') pass: ElementRef | undefined;
  @ViewChild('userWelcome', { static: true }) userWelcome:
    | ModalComponent
    | undefined;
  @ViewChild('successSaveUser', { static: true }) successSaveUser:
    | ModalComponent
    | undefined;
  @ViewChild('errorSaveUser', { static: true }) errorSaveUser:
    | ModalComponent
    | undefined;
  @ViewChild('saveUserConfirmation', { static: true }) saveUserConfirmation:
    | ModalComponent
    | undefined;
  ngOnInit(): void {
    this.userProfil.getCurrentUserProfil().then((user) => {
      this.user.email = user.email;
      this.user.firstName = user.firstName;
      this.user.lastName = user.lastName;
      this.initUser(user);
    });
  }
  editUser() {
    this.editMode = true;
  }
  async saveUser() {
    let pass = '';
    const userId = firebaseAuth().currentUser?.uid;
    await firebaseStore()
      .collection('users')
      .doc(userId)
      .get()
      .then((doc) => (pass = doc.data()?.password));
    if (pass === this.pass?.nativeElement.value) {
      this.userProfil.saveUser(
        this.firstName?.nativeElement.value,
        this.lastName?.nativeElement.value,
        [''],
        this.adresse?.nativeElement.value,
        this.citation?.nativeElement.value
      );
      this.pass && (this.pass.nativeElement.value = '');
      this.saveUserConfirmation?.close();
      this.successSaveUser?.open();
      this.editMode = false;
    } else {
      this.saveUserConfirmation?.close();
      this.pass && (this.pass.nativeElement.value = '');
      this.errorSaveUser?.open();
    }
  }
  initUser(user: any) {
    if (
      user.firstName === '' ||
      user.lastName === '' ||
      !user.firstName ||
      !user.lastName
    ) {
      this.userWelcome?.open();
      this.editUser();
    } else this.editMode = false;
  }
  reload() {
    setTimeout(() => window.location.reload(), 100);
  }
}
