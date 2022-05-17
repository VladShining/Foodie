import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root-card',
  templateUrl: './root-card.component.html',
  styleUrls: ['./root-card.component.scss'],
})
export class RootCardComponent implements OnInit {
  @Input() title!: string;
  @Input() paragraph!: Array<string>;
  constructor() {}

  ngOnInit(): void {}
}
