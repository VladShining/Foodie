import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor() {}
  @Input() isOpen!: boolean;

  ngOnInit(): void {}
  // @Output()
  // toogleMenu() {
  //   this.isOpen != this.isOpen;
  // }
}
