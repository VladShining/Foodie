import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer-app',
  template: `<div class="container footer flexible">
    <div class="git">
      <img
        (click)="linkGithub()"
        src="../../assets/images/GitHub-Mark-120px-plus.png"
        alt="github"
      />
    </div>
    <div>&copy;{{ year }} nca-49</div>
  </div>`,
  styleUrls: ['./footer.scss'],
})
export class FooterComponent implements OnInit {
  year: string = '';
  constructor() {}
  linkGithub() {
    window.open(`https://github.com/VladShining/Foodie`);
  }
  ngOnInit() {
    const year = new Date();
    this.year = year.getFullYear().toString();
  }
}
