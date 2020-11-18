import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {

  inboxlist:any;
  loading:any;
 constructor(private api:ApiService,public loadingCtrl: LoadingController,public toastController: ToastController) { 
   this.loaderApi();
  }

  ngOnInit() {
    this.getInboxPost("1");
  }
  async getInboxPost(adsType : string){
    let _self=this;
   await this.api.getinboxApi(adsType).subscribe(res =>{
       if(res.status){
        _self.loading.dismiss();
        _self.inboxlist=res.response;
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
