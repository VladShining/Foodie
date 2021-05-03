import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Menu } from './interface/menu';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  menu: Menu[];
  outtitle: string;
  constructor(private titleService: Title) {
    this.menu = [
      { label: '🏡 Accueil', id: 1, router: '/root/home' },
      { label: '🍱 Recette', id: 2, router: '/root/recip' },
      { label: '👤 Mon Profil', id: 3, router: '/root/profil' },
      { label: '📅 Calendrier', id: 4, router: '/root/calendar' },
      { label: '🍲 List', id: 5, router: '/root/setting/recip' },
      { label: '👥 Utilisateur', id: 6, router: '/root/setting/users' },
    ];
  }
  setTitle(title: string) {
    this.titleService.setTitle(title);
  }
  getTitle() {
    return this.titleService.getTitle();
  }
  changeTitle(title: string) {
    this.outtitle = title;
  }
}
