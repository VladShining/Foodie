import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from 'src/app/service/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent implements OnInit {
  titre: string;
  constructor(public loaderService: LoaderService, route: ActivatedRoute) {}

  ngOnInit(): void {
    this.titre = 'vjsfdojvn';
  }
}
