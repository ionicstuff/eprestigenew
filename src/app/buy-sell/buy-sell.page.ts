import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './../api.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-buy-sell',
  templateUrl: './buy-sell.page.html',
  styleUrls: ['./buy-sell.page.scss'],
})
export class BuySellPage implements OnInit {

  coffeecorner:any;
  loading:any;
  segmentChanged:any;
  book:any={};
  notes:any={};
  reports:any={};
  others:any={};
  sellList:any;
  pList
  constructor(private api:ApiService,public loadingCtrl: LoadingController,public toastController: ToastController,private alertC:AlertController) { 
    this.segmentChanged = "buy";
  }
 
  ngOnInit() {
    this.getDataUserPost("1");
    this.getSellLists("1");
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

     async getSellLists(adsType : string){
      let _self=this;
     await this.api.getSellList(adsType).subscribe(res =>{
      _self.sellList=res.response;
         if(res.status){
          _self.loading.dismiss();
          _self.sellList=res.response;
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
         duration: 2000,
         position: 'top'
      });
      toast.present();
    }




    sendBooks(){
      if(this.book.name==null){
        this.presentToast("Add name")
      }else if(this.book.desc==null){
        this.presentToast("Add description")
      }else{
        this.loaderApi();
        this.books("1","Books",this.book.name,this.book.desc,this.book.price);
       
        }
    }


    sendNotes(){
      if(this.notes.name==null){
        this.presentToast("Add name")
      }else if(this.notes.desc==null){
        this.presentToast("Add description")
      }else{
        this.loaderApi();
        this.books("1","Notes",this.notes.name,this.notes.desc,this.notes.price);
       
        }
    }

    sendReports(){
      if(this.reports.name==null){
        this.presentToast("Add name")
      }else if(this.reports.desc==null){
        this.presentToast("Add description")
      }else{
        this.loaderApi();
        this.books("1","Books",this.reports.name,this.reports.desc,this.reports.price);
       
        }
    }
    sendOthes(){
      if(this.others.name==null){
        this.presentToast("Add name")
      }else if(this.others.desc==null){
        this.presentToast("Add description")
      }else{
        this.loaderApi();
        this.books("1","Books",this.others.name,this.others.desc,this.others.price);
       
        }
    }

    async books(id:string,cate:string,name:string,desc:string,price:string){
      await this.api.sendBooks(id,cate,name,desc,price).subscribe(res =>{
        if(res.status){
            this.loading.dismiss();
            this.presentToast("Successfully Submitted");
            console.log("suceess"+res.msg);
          }else{
           this.presentToast(res.msg);
           this.loading.dismiss();
          }
         },err =>{
           console.log(err)
           this.loading.dismiss();
           //this.nav.navigateForward("/tabs/tab2");
           this.presentToast(err.message);
         });
       }
       changeStates(){
           this.changeStatess("1");
       }

       async changeStatess(adsType : string){
        let _self=this;
       await this.api.productCate(adsType).subscribe(res =>{
        _self.pList=res.response;
          //  if(res.status){
          //   _self.loading.dismiss();
          //   _self.coffeecorner=res.response;
          //   }else{
          //     this.presentToast(res.msg);
          //   }
         },err =>{
            _self.loading.dismiss();
            this.presentToast(err);
           });
         }
       async presentAlertConfirm(call:string) {
        const alert = await this.alertC.create({
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
