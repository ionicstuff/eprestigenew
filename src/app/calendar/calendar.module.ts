import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NgCalendarModule } from 'ionic2-calendar';
import { CalendarPageRoutingModule } from './calendar-routing.module';

import { CalendarPage } from './calendar.page';
import { CalendarModule } from 'ion2-calendar';

@NgModule({
  imports: [
    NgCalendarModule,
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarPageRoutingModule,
    CalendarModule,
  ],
  declarations: [CalendarPage],
})
export class CalendarPageModule {}
