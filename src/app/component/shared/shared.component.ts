import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
})
export class SharedComponent implements OnInit {
  authStatus: boolean;
  title: string;
  isHome: boolean;
  constructor() {}

  ngOnInit(): void {
    this.title = 'le titre';
  }
}
