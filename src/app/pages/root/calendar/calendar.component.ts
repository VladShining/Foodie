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
    headerToolbar: {
      left: 'custom1',
      center: 'title',
      right: 'custom2 prevYear,prev,next,nextYear',
    },
    customButtons: {
      custom1: {
        text: 'custom 1',
        click: function () {
          alert('clicked custom button 1!');
        },
      },
      custom2: {
        text: 'custom 2',
        click: function () {
          alert('clicked custom button 2!');
        },
      },
      nca49: {
        text: 'Nca-49',
        click: function () {
          alert('clicked custom button 2!');
        },
      },
    },
    footerToolbar: {
      left: 'custom1,custom2',
      center: 'nca49',
      right: 'prev,next',
    },
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
