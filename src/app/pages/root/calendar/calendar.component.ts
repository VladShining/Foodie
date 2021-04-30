import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from 'src/app/service/menu.service';

import {
  CalendarOptions,
  FullCalendarComponent,
  formatDate,
} from '@fullcalendar/angular';
let str = formatDate(new Date(), {
  month: 'long',
  year: 'numeric',
  day: 'numeric',
});

console.log(str);
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr);
  }
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this),
    events: [
      { title: 'event 1', date: '2021-04-01' },
      { title: 'event 2', date: '2021-04-02' },
    ],
  };
  someMethod() {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.next();
  }

  constructor(route: ActivatedRoute, menuService: MenuService) {
    menuService.setTitle(route.snapshot.data['title']);
  }

  ngOnInit(): void {}
}
