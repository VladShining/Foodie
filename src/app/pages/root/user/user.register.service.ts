import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { Observable } from 'rxjs';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService
{

  isActif: boolean;
  isExist: Observable<boolean>;
  users: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>;

  constructor()
  {
    this.isExist = new Observable;
    this.isExist.subscribe(() => false);

    this.users = firebase.firestore().collection('user')
  }

  registerUser(name: string, lastname: string, password: string, phone: number, email: string)
  {
    const elID = uuidv4();
    // let users = firebase.firestore().collection('user')
    // const obser = new Observable
    //register interface user
    // obser.subscribe((numb) => this.isExist = true)
    this.isExist.subscribe(() => true);
    console.log(this.isExist)
    // return void;
  }
  checkUser(id: any)
  {
    return new Promise(() =>
    {

    })
  }
  getCurrentUserExist()
  {

    if (this.isExist.subscribe(() => true))
    {
      return true;
    }
    else
    {
      return false;

    }
  }

}
