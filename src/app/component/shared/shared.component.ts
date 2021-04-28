import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
})
export class SharedComponent implements OnInit {
  authStatus: boolean;

  constructor() {}

  ngOnInit(): void {}
}
