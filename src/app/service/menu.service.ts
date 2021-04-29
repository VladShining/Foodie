import { Injectable } from '@angular/core';
import { Menu } from './interface/menu';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  menu: Menu[];
  constructor() {
    this.menu = [
      { label: 'Home', id: 1, router: '/root/home' },
      { label: 'Recip', id: 2, router: '/root/recip' },
      { label: 'Profil', id: 3, router: '/root/profil' },
      { label: 'Calendar', id: 4, router: '/root/calendar' },
      { label: 'List', id: 5, router: '/List' },
      { label: 'Users', id: 6, router: '/users' },
    ];
  }
}
