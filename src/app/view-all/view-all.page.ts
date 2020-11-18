import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.page.html',
  styleUrls: ['./view-all.page.scss'],
})
export class ViewAllPage implements OnInit {
  bulletinlist:any;
  loading:any;
  constructor( private api:ApiService,private loadingCtrl:AlertController,private tost:ToastController) { }

  ngOnInit() {
    this.getDataUserPost("Bulletin_board");
  }
  async getDataUserPost(adsType : string){
    await this.api.putTypeDataApi(adsType).subscribe(res =>{
        this.bulletinlist=res.response;
     },err =>{
         this.loading.dismiss();
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
        const toast = await this.tost.create({
          message: msg,
          duration: 2000
        });
        toast.present();
      }
}
