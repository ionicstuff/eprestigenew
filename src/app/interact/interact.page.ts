import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase/app";
import { NavController } from '@ionic/angular';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
import 'firebase/messaging';   // for cloud messaging
import 'firebase/functions';   // for cloud functions
//  import { firebase } from '@firebase/app';

@Component({
  selector: 'app-interact',
  templateUrl: './interact.page.html',
  styleUrls: ['./interact.page.scss'],
})
export class InteractPage implements OnInit {

   uid;
   name;
   username;
   dp;
   users=[];

  constructor(public nav : NavController) { 

     firebase.firestore().collection("chatUsers").doc(this.uid).get().then(userData=>{
      this.name=userData.data()["name"];
      this.username=userData.data()["username"];
      this.dp=userData.data()["dp"];
    });

    firebase.firestore().collection("chatUsers").get().then(userData=>{
      userData.forEach(childData => {
        if(childData.data()['uid']!=this.uid){
          this.users.push(childData.data());
        
        }
      });
    });


    


  }

  ngOnInit() {
  }

  gotoChat(uid,name){
    sessionStorage.setItem("uid",uid);
    sessionStorage.setItem("name",name);
    this.nav.navigateForward("/chat-details");
  }
}
