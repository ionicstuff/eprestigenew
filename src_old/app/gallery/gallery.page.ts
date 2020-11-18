import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  coffeecorner:any;
  loading:any;
  segmentChanged:any;
  alllist:any;
  constructor(private api:ApiService,public loadingCtrl: LoadingController,public toastController: ToastController) { 
    this.segmentChanged = "images";
  }
 
  ngOnInit() {
    this.getDataUserPost("1");
    this.getAllGallery("1");
  }

async getDataUserPost(adsType : string){
    let _self=this;
   await this.api.getGalleryUser(adsType).subscribe(res =>{
    _self.coffeecorner=res.response;
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

     async getAllGallery(adsType : string){
      let _self=this;
     await this.api.getGalleryAll(adsType).subscribe(res =>{
      _self.alllist=res.response;
        //  if(res.status){
        //   _self.loading.dismiss();
        //   _self.alllist=res.response;
        //   }else{
        //     this.presentToast(res.msg);
        //   }
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
