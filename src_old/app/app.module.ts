import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {HttpClientModule,HttpClient} from '@angular/common/http'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarModule } from 'ion2-calendar';
import { FormsModule } from '@angular/forms';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import * as firebase from 'firebase/app';

import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
import 'firebase/messaging';   // for cloud messaging
import 'firebase/functions';   // for cloud functions



var firebaseConfig = {
      apiKey: "AIzaSyD01IamdoYtgicd5Ur8zQi04zfbU-H0hFM",
      authDomain: "eprestige-8a733.firebaseapp.com",
      databaseURL: "https://eprestige-8a733.firebaseio.com",
      projectId: "eprestige-8a733",
      storageBucket: "eprestige-8a733.appspot.com",
      messagingSenderId: "365776724776",
      appId: "1:365776724776:web:f6b73c9ae69fb50279661d",
      measurementId: "G-Z71T5LHDZP"
    };
  firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,CalendarModule,FormsModule,HttpClientModule,
 
     ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
