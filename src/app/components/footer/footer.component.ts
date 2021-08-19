import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer-app',
  template: `<div class="container footer flexible">
    <div class="git">
      <a href="https://github.com/VladShining/Foodie">
        <img
          src="../../assets/images/GitHub-Mark-120px-plus.png"
          alt="github"
        />
      </a>
    </div>
    <div>&copy;{{ year }} nca-49</div>
  </div>`,
  styleUrls: ['./footer.scss'],
})
export class FooterComponent implements OnInit {
  year: string = '';
  constructor() {}

  ngOnInit() {
    const year = new Date();
    this.year = year.getFullYear().toString();
  }
}
