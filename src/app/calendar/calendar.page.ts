import { Component, OnInit, ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { Platform } from '@ionic/angular';
import { CalendarComponentOptions } from 'ion2-calendar';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  // Single Date
  optionsSingle: CalendarComponentOptions = {
    color: 'primary',
  };

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  eventSource = [];

  onEventSelected() {}
  onViewTitleChanged() {}
  onTimeSelected() {}

  constructor(
    public platform: Platform,
    private alertCtrl: AlertController,
    @Inject(LOCALE_ID) private locale: string
  ) {}

  onChange($event) {
    console.log($event);
  }

  addEvent() {
    let eventCopy = {
      title: 'Meeting With Vaibhav Sir',
      startTime: new Date('06:30 AM'),
      endTime: new Date('07:40 PM'),
      allDay: false,
      desc: 'I am going to office for 5 days',
    };

    if (eventCopy.allDay) {
      let start = eventCopy.startTime;
      let end = eventCopy.endTime;

      eventCopy.startTime = new Date(
        Date.UTC(
          start.getUTCFullYear(),
          start.getUTCMonth(),
          start.getUTCDate()
        )
      );
      eventCopy.endTime = new Date(
        Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1)
      );
    }

    this.eventSource.push(eventCopy);
    //this.myCal.loadEvents();
    //this.resetEvent();
  }
}
