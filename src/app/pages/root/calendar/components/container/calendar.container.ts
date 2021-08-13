import { Component, OnInit, ViewChild } from '@angular/core';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular';
import frLocale from '@fullcalendar/core/locales/fr';

@Component({
  selector: 'calendar-container',
  templateUrl: 'calendar-container.html',
})
export class CalendarContainer implements OnInit {
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;
  constructor() {}
  handleDateClick(arg: { dateStr: string }) {
    alert('date click! ' + arg.dateStr);
  }
  calendarOptions: CalendarOptions = {
    plugins: [listPlugin, timeGridPlugin],
    initialView: 'dayGridMonth',
    businessHours: true,
    locales: [frLocale],
    locale: 'fr',
    headerToolbar: {
      left: 'listWeek,timeGridWeek,dayGridMonth',
      center: 'title',
      right: 'prevYear,prev today next,nextYear',
    },
    customButtons: {
      custom1: {
        text: 'Nouveau',
        click: function () {},
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
    dateClick: this.handleDateClick.bind(this),

    events: [
      { title: 'event 1', date: '2021-04-01' },
      { title: 'event 2', date: '2021-04-02' },
    ],
  };
  someMethod() {
    let calendarApi = this.calendarComponent?.getApi();
    calendarApi?.next();
  }
  changeDaygrid() {
    console.log('object');
  }
  ngOnInit() {}
}
