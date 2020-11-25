import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { ToastController, LoadingController } from '@ionic/angular';
import * as moment from 'moment';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.page.html',
  styleUrls: ['./add-todo.page.scss'],
})
export class AddTodoPage implements OnInit {
  add: any = {};
  loading: any;

  constructor(
    public nav: NavController,
    public api: ApiService,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController
  ) {}

  ngOnInit() {}

  send() {
    if (this.add.name == null) {
      this.presentToast('Please enter matter');
    } else if (this.add.one == null) {
      this.presentToast('Select one');
    } else if (this.add.priority == null) {
      this.presentToast('Select priority');
    } else if (this.add.datetime == null) {
      this.presentToast('Select date');
    } else {
      this.loaderApi();
      //console.log("date"+moment(this.add.datetime).format('HH:MM'));
      this.senData(
        '1',
        this.add.name,
        this.add.one,
        this.add.priority,
        moment(this.add.datetime).format('h:mm A')
      );
      this.add.name = '';
      this.add.one = '';
      this.add.priority = '';
      this.add.datetime = '';
    }
  }

  async presentToast(status: string) {
    let toast = await this.toastCtrl.create({
      message: status,
      duration: 2000,
      position: 'bottom',
    });
    await toast.present();
  }

  async loaderApi() {
    let _self = this;
    _self.loading = await this.loadingCtrl.create({
      message: 'Please wait...',
    });
    _self.loading.present();
  }

  async senData(
    id: string,
    name: string,
    one: string,
    priority: string,
    datetime: string
  ) {
    await this.api.sendTodo(id, name, one, priority, datetime).subscribe(
      (res) => {
        if (res.status) {
          this.loading.dismiss();
          this.presentToast('Successfully Submitted');
          this.nav.navigateForward('/tabs/tab2');
          console.log('suceess' + res.msg);
        } else {
          this.presentToast(res.msg);
          this.loading.dismiss();
        }
      },
      (err) => {
        console.log(err);
        this.loading.dismiss();
        //this.nav.navigateForward("/tabs/tab2");
        this.presentToast(err.message);
      }
    );
  }
}
