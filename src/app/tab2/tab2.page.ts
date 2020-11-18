import { Component } from '@angular/core';
import { AlertController, LoadingController, ToastController, NavController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { ActionSheetController } from '@ionic/angular';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public form = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false }
  ];

  bulletinlist:any;
  loading:any;
  todolist:any;
  constructor(public nav : NavController,private alertCtrl:AlertController,private api:ApiService,public loadingCtrl: LoadingController,public toastController: ToastController,public actionSheetController: ActionSheetController) {
    
  }


  ngOnInit() {
   
  this.loaderApi();
  }

  
  ionViewWillEnter(){
    this.getToDoList("1");
  }

  async getToDoList(ids : string){
    let _self=this;
   await this.api.getToDoApi(ids).subscribe(res =>{
    _self.todolist=res.response;
   _self.loading.dismiss();
      if(!res.status){
        console.log("todo"+res.status);
        this.presentToast(res.msg);
        _self.loading.dismiss();
        }else{
         console.log("todo"+res.status);
        _self.loading.dismiss();
        _self.todolist=res.response;
        }
     },err =>{
        _self.loading.dismiss();
        this.presentToast(err);
        console.log("todo"+err.message);
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


  async presentPrompt() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Schedule Date',
      inputs: [
          {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Matter...'
        },
         {
          name: 'name4',
          type: 'date',
          min: '2018-01-01',
          max: '2021-01-01'
        } 
      
      ],
   buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
   });

    await alert.present();
  }


  sendToDo(){
    this.nav.navigateForward("/add-todo")
  }

  async presentAlert() {
    let alert = this.alertCtrl.create({
      subHeader: 'Low battery',
      message: 'This is an alert message.',
      buttons: ['Dismiss']
    });
    (await alert).present();
  }

}
