import { Component, OnInit, OnDestroy } from '@angular/core';
import { LOADERS } from '../../script/load';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  i!: any;
  elem: string[] = ['', ''];
  constructor() {}
  ngOnDestroy(): void {
    clearInterval(this.i);
  }

  ngOnInit(): void {
    this.i = setInterval(() => {
      this.elem = this.random(LOADERS);
    }, 2000);
  }

  linkNca49() {
    window.open(`https://nca-49.web.app`);
  }

  random(elem: string[][]) {
    return elem[Math.floor(Math.random() * elem.length)];
  }
}
