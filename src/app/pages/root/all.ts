import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ModalModule } from 'angular-custom-modal';
import { routes, RootRoutingModule } from './root-routing.module';

@Component({
  styles: [``],
  selector: 'root-nav',
  template: `<div class="navbar">
    <ul>
      <li *ngFor="let menu of Menu" [routerLink]="[menu.link]" class="link">
        {{ menu.label }}
      </li>
      <li (click)="logout()">
        <img src="../../../assets/images/logout.svg" alt="logout" />
      </li>
    </ul>
  </div>`,
})
export class AllComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}

@NgModule({
  declarations: [AllComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    RootRoutingModule,
    FormsModule,
    NgSelectModule,
    ModalModule,
  ],
})
export class RootModule {}
