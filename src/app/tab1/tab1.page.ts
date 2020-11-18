import { Component } from '@angular/core';
import { ApiService } from './../api.service';
import { LoadingController, NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  bulletinlist:any;
  loading:any;
  newslist:any;
  recentlist:any;
 constructor(private nav:NavController,private api:ApiService,public loadingCtrl: LoadingController,public toastController: ToastController) { 
  // this.loaderApi();
  }

  ngOnInit() {
    this.getDataUserPost("Bulletin_board");
    this.getNews("News");
    this.getRecentList("1");
  }
  

  cards = [
    "Directory","Gallery","News","Events","Interact","Buy&Sell","Celebration","Notice Board","Coffee Corner"
  ]


  videos = [
    "Sanjeev","Rachit","Vaibhav","Kishore"
  ]
  async getDataUserPost(adsType : string){
   await this.api.putTypeDataApi(adsType).subscribe(res =>{
       this.bulletinlist=res.response;
    },err =>{
        this.loading.dismiss();
        this.presentToast(err);
       });
     }


   async getNews(adsType : string){
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


       viewAll(){
         this.nav.navigateForward("/view-all");
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

   async getRecentList(ids: string) {
      let _self=this;
      await this.api.getRecentList(ids).subscribe(res =>{
        _self.recentlist=res.response;
          if(!res.status){
            this.presentToast(res.msg);
           }else{
            _self.loading.dismiss();
            _self.recentlist=res.response;
           
           }
        },err =>{
           _self.loading.dismiss();
           this.presentToast(err);
          });
    }
  
  
}
