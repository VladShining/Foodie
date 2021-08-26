import { Component, OnInit } from '@angular/core';
import { firebaseAuth } from 'src/environments/firebase';
import { UserRecipService } from '../../service/user-recip.service';
import { Recip } from '../../utils/recip';

@Component({
  selector: 'app-recip-view',
  templateUrl: './recip-view.component.html',
  styleUrls: ['./recip-view.component.scss'],
})
export class RecipViewComponent implements OnInit {
  recip: Recip[];
  ingre!: string;
  constructor(private recipService: UserRecipService) {
    this.recip = [
      {
        id: '',
        name: '',
        tag: '',
        category: '',
        time1: '',
        time2: '',
        afterrecip: '',
        postrecip: '',
        recip: '',
        ingredient: [],
        utensils: [],
      },
    ];
  }

  ngOnInit(): void {
    this.showUserRecip();
  }
  showUserRecip() {
    const user = firebaseAuth().currentUser?.uid || '';
    // console.log(user);
    this.recipService.getUserRecip(user).then((recip) => {
      for (let i = 0; i < recip.length; i++) {
        this.recip[i] = {
          ...recip[i],
        };
      }
    });
  }
}
