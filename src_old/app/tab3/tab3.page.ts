import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  attendancelist:any;
  loading:any;
 constructor(private api:ApiService,public loadingCtrl: LoadingController,public toastController: ToastController) { 
   this.loaderApi();
  }

  ngOnInit() {
    this.getAttendanceList("1");
  }
  async getAttendanceList(adsType : string){
    let _self=this;
   await this.api.getAttendanceApi(adsType).subscribe(res =>{
       if(res.status){
        _self.loading.dismiss();
        _self.attendancelist=res.response;
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
