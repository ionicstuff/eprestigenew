import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { LoadingController, NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { NavigationExtras,Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  newslist:any;
  loading:any;
 constructor(private routers:Router,private nav:NavController,private api:ApiService,public loadingCtrl: LoadingController,public toastController: ToastController) { 
   this.loaderApi();
  }

  ngOnInit() {
    this.getDataUserPost("news");
  }
  async getDataUserPost(adsType : string){
    let _self=this;
   await this.api.putTypeDataApi(adsType).subscribe(res =>{
       if(res.status){
        _self.loading.dismiss();
        _self.newslist=res.response;
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

  // detailsPush(){
  //    this.nav.navigateForward("/details-all-list")
  //   }


    detailsPush(dt : string){
      let _self=this;
      let navigationExtras: NavigationExtras = { state: { dataAll: dt }};
      _self.routers.navigate(['/details-all-list'], navigationExtras);
       console.log("Direee"+navigationExtras);
    }
}
