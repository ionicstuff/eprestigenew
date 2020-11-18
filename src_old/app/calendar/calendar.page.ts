import { Component, OnInit,ViewChild,Inject, LOCALE_ID } from '@angular/core';
import { Platform } from '@ionic/angular';
import { CalendarComponentOptions } from 'ion2-calendar';
import { InAppBrowser , InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { AlertController } from '@ionic/angular';




@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})





export class CalendarPage implements OnInit  {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  eventSource=[];
  calendar={
    mode:'week',
    currentDat: new Date()
  }


  //@ViewChild(CalendarComponent) myCal: CalendarComponent;

  onEventSelected(){

  }
  onViewTitleChanged(){

  }
  onTimeSelected(){

  }
  constructor(private alertCtrl: AlertController, @Inject(LOCALE_ID) private locale: string) { }
  



  addEvent() {
    let eventCopy = {
      title: "Meeting With Vaibhav Sir",
      startTime:  new Date("06:30 AM"),
      endTime: new Date("07:40 PM"),
      allDay: false,
      desc: "I am going to office for 5 days"
    }
 
    if (eventCopy.allDay) {
      let start = eventCopy.startTime;
      let end = eventCopy.endTime;
 
      eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
      eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
    }
 
    this.eventSource.push(eventCopy);
    //this.myCal.loadEvents();
    //this.resetEvent();
  }

}
