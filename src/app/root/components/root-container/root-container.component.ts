import { Component, OnInit } from '@angular/core';
import { list } from '../../root.mock';

@Component({
  selector: 'app-root-container',
  templateUrl: './root-container.component.html',
  styleUrls: ['./root-container.component.scss'],
})
export class RootContainerComponent implements OnInit {
  //mock
  list: any = list;

  constructor() {}

  ngOnInit(): void {}
}
