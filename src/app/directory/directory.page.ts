import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.page.html',
  styleUrls: ['./directory.page.scss'],
})
export class DirectoryPage implements OnInit {

  directory:any;
  loading:any;
  institude:any;
 constructor(private alrtCntrl: AlertController,private api:ApiService,public loadingCtrl: LoadingController,public toastController: ToastController) { 
   this.loaderApi();
  }

  ngOnInit() {
    this.getDataUserPost("");
    this.selectIn("1");
  }
  async getDataUserPost(adsType : string){
    let _self=this;
   await this.api.putDirectory(adsType).subscribe(res =>{
       if(res.status){
        _self.loading.dismiss();
        _self.directory=res.response;
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


async selectIn(ss:string){
   this.selectinstitude(this.institude);
}

async selectinstitude(institude: string) {
    let _self=this;
    await this.api.inslist(institude).subscribe(res =>{
        if(res.status){
         _self.loading.dismiss();
         _self.directory=res.response;
         }else{
           this.presentToast(res.msg);
         }
      },err =>{
         _self.loading.dismiss();
         this.presentToast(err);
        });
  }

 


  
 async presentToast(msg:string) {
      const toast = await this.toastController.create({
        message: msg,
        duration: 2000
      });
      toast.present();
    }

    async presentAlertConfirm(call:string) {
      const alert = await this.alrtCntrl.create({
        header: 'Do you want to call?',
        message: 'Call  '+call,
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Yes',
            handler: () => {
              console.log('Confirm Okay');
            }
          }
        ]
      });
  
      await alert.present();
    }
}
