import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { LoaderService } from 'src/app/service/loader.service';
import { fade } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
  animations: [fade],
})
export class RootComponent implements OnInit {
  titre: string;
  constructor(public loaderService: LoaderService, route: ActivatedRoute) {}

  ngOnInit(): void {
    this.titre = 'vjsfdojvn';
  }
  changetitre(newtitre: string) {
    this.titre = newtitre;
  }
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
