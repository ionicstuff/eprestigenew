import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-coffee-corner',
  templateUrl: './coffee-corner.page.html',
  styleUrls: ['./coffee-corner.page.scss'],
})
export class CoffeeCornerPage implements OnInit {
  
  coffeecorner:any;
  loading:any;
 constructor(private api:ApiService,public loadingCtrl: LoadingController,public toastController: ToastController) { 
   this.loaderApi();
  }

  ngOnInit() {
    this.getDataUserPost("CoffeeCorner");
  }
  async getDataUserPost(adsType : string){
    let _self=this;
   await this.api.putTypeDataApi(adsType).subscribe(res =>{
       if(res.status){
        _self.loading.dismiss();
        _self.coffeecorner=res.response;
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

}
