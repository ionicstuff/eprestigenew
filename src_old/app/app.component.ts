import { Component } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';  

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public alertController: AlertController,
    private iab: InAppBrowser,
  ) {
    this.initializeApp();
    this.sideMenu();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }




  async presentlogout() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm',
      message: 'Do You Want To <strong>Exit</strong>',
      buttons: [
        {
          text: 'YES',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'NO',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentShareApp() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm',
      message: 'Do You Want To <strong>Exit</strong>',
      buttons: [
        {
          text: 'YES',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            let tagget="_system";
            const browser = this.iab.create('https://play.google.com/store/apps/details?id=com.worktoday&hl=en',tagget).show();
          }
        }, {
          text: 'NO',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }


  

  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Home",
        url   : "/tab1",
        icon  : "home-outline"
      },
      {
        title : "Chat",
        url   : "/chat",
        icon  : "chatbubble-ellipses-outline"
      },
      {
        title : "Contact us",
        url   : "/contact-us",
        icon  : "call-outline"
      },
      {
        title : "Support",
        url   : "/support",
        icon  : "help-circle-outline"
      },
      {
        title : "About us",
        url   : "/about-us",
        icon  : "person-outline"
      },
     
      
    ]
  }
}