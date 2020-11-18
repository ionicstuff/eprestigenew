import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-chat-details',
  templateUrl: './chat-details.page.html',
  styleUrls: ['./chat-details.page.scss'],
})
export class ChatDetailsPage implements OnInit {

  // other's data
  name;
  o_uid;

  //my data
  uid;
  textMsg;

  chats=[];
constructor() { 
     this.name=sessionStorage.getItem("name");
     this.o_uid=sessionStorage.getItem("uid");
     this.uid=sessionStorage.getItem("uid");
    firebase.firestore().collection("chats").doc(this.uid).collection(this.o_uid).onSnapshot(snap=>{
       this.chats=[];
       snap.forEach(child=>{
         this.chats.push(child.data);
         console.log("Fireeee"+child.data);
       })
     });
}

  ngOnInit() {
  }


  send(){

    firebase.firestore().collection('chats').doc(this.uid).collection(this.o_uid).add({
     time : Date.now(),
     uid:this.uid,
     msg:this.textMsg
    });


    firebase.firestore().collection('chats').doc(this.o_uid).collection(this.uid).add({
      time : Date.now(),
      uid:this.uid,
      msg:this.textMsg
     }).then(()=>{
        this.textMsg="";
     });

  }
}
