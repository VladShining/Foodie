import {
  Component,
  NgZone,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { firebaseAuth, firebaseStore } from 'src/environments/firebase';
import { ListRecipService } from '../../service/list-recip.service';
import { Recip } from '../../utils/recip';

@Component({
  selector: 'app-recip-list',
  templateUrl: './recip-list.component.html',
  styleUrls: ['./recip-list.component.scss'],
})
export class RecipListComponent implements OnInit, OnChanges {
  recip: Recip[];
  recipChange: any = { name: '' };
  constructor(private recipService: ListRecipService, private ngZone: NgZone) {
    this.recip = [
      {
        id: '',
        name: '',
        tag: '',
        category: '',
        time: '',
        recip: '',
        ingredient: [''],
        author: [''],
      },
    ];
  }
  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    this.readAllRecip();
    // this.getOneRecipInTimeReel();
    this.getAllRecipInTimeReel();
    // this.recipChange.subscribe((recip: any) => (this.recipChange = recip));
  }
  readAllRecip() {
    this.recipService.getAllRecip().then((recip) => {
      for (let i = 0; i < recip.length; i++) {
        this.recip[i] = {
          id: '',
          name: '',
          tag: '',
          category: '',
          time: '',
          recip: '',
          ingredient: [''],
          author: [''],
          ...recip[i],
        };
      }
    });
  }
  getOneRecipInTimeReel() {
    firebaseStore()
      .collection('recip')
      .doc('KOnqV4TyxnSGuY5DsSON')
      .onSnapshot((doc) => {
        this.ngZone.run(() => {
          this.recipChange = doc.data();
        });
      });
  }
  getAllRecipInTimeReel() {
    const user = firebaseAuth().currentUser?.uid || '';

    firebaseStore()
      .collection('recip')
      .where('id', '==', user)
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          this.ngZone.run(() => {
            this.recipChange = change.doc.data();
          });
        });
      });
  }
}
