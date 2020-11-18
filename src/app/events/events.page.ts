import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { NavigationExtras,Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  eventslist:any;
  loading:any;
 constructor(private routers:Router,private api:ApiService,public loadingCtrl: LoadingController,public toastController: ToastController) { 
   this.loaderApi();
  }

  ngOnInit() {
    this.getDataUserPost("Events");
  }
  async getDataUserPost(adsType : string){
    let _self=this;
   await this.api.putTypeDataApi(adsType).subscribe(res =>{
       if(res.status){
        _self.loading.dismiss();
        _self.eventslist=res.response;
        }else{
          this.presentToast(res.msg);
        }
     },err =>{
        _self.loading.dismiss();
        this.presentToast(err);
       });
     }
  async loaderApi() {
      let _self=this;
      _self.loading = await this.loadingCtrl.create({
        message: 'Please wait...'
      });
     _self.loading.present();
    }

 async presentToast(msg:string) {
      const toast = await this.toastController.create({
        message: msg,
        duration: 2000
      });
      toast.present();
    }
    detailsPush(dt : string){
      let _self=this;
      let navigationExtras: NavigationExtras = { state: { dataAll: dt }};
      _self.routers.navigate(['/details-all-list'], navigationExtras);
       console.log("Direee"+navigationExtras);
    }
}
