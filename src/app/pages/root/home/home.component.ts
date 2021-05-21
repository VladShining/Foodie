import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
// import { }
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from 'src/app/service/menu.service';
import firebase from 'firebase';
import 'firebase/firestore';
import { UserRegisterService } from '../user/user.register.service';

export interface Test {
  initial: string;
  data: string[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  isUserNotExist: boolean;
  db: any;
  list: any;
  ini: string[] = [];
  @Output() data = new EventEmitter<string>();
  items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);

  LOADER_INTERVAL: number;

  constructor(
    public route: ActivatedRoute,
    menuService: MenuService,
    user: UserRegisterService
  ) {
    this.isUserNotExist = !user.getCurrentUserExist();
    menuService.setTitle(route.snapshot.data['title']);
    menuService.changeTitle(route.snapshot.data['title']);
    this.data = route.snapshot.data['title'];
    this.db = firebase.firestore();
    this.list = [{ initial: '', data: [] }];
    this.LOADER_INTERVAL = 1600;
  }

  ngOnInit(): void {
    this.getCategorie();
    setInterval(this.loader, this.LOADER_INTERVAL);
    this.db.enablePersistence().catch((err) => {
      if (err.code == 'failed-precondition') {
        // Multiple tabs open, persistence can only be enabled
        // in one tab at a a time.
        // ...
      } else if (err.code == 'unimplemented') {
        // The current browser does not support all of the
        // features required to enable persistence
        // ...
      }
    });
  }

  getCategorie() {
    var docRef = this.db.collection('recip').doc('d6jl5IaxsNmDq9MxKo9c');
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          let data: string[];
          data = doc.data()['Catégorie:Recettes par type de plat'];
          this.setDataCategorie(data);
        } else {
          console.log('No such document!');
        }
      })
      .catch((error) => {
        console.log('Error getting document:', error);
      });
  }

  setDataCategorie(categorie: string[]) {
    // categorie.forEach((element) => {
    //   this.ini.push(element.substr(0, 1));
    // });
    // this.ini = this.ini.filter((ele, pos) => this.ini.indexOf(ele) == pos);
    // for (let i = 0; i < this.ini.length; i++) {
    //   let li = { initial: '', data: [] };
    //   li.initial = this.ini[i];
    //   li.data = categorie.filter((e) => e.startsWith(this.ini[i]));
    //   this.list.push(li);
    // }
    // this.list.shift();
    this.list = Object.entries(
      categorie.reduce(
        (acc, cur) => ((acc[cur[0]] = [...(acc[cur[0]] || []), cur]), acc),
        {}
      )
    ).map(([key, value]) => ({ initial: key, data: value }));

    // console.log(this.list);
  }
  loader() {}
}
