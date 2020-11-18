import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-all-list',
  templateUrl: './details-all-list.page.html',
  styleUrls: ['./details-all-list.page.scss'],
})
export class DetailsAllListPage implements OnInit {
  dd:any;
  constructor(private activatedRoute : ActivatedRoute,private routerList : Router) { 
    let _self=this;
    this.activatedRoute.queryParams.subscribe(params => {
       if (_self.routerList.getCurrentNavigation().extras.state) {
         _self.dd= _self.routerList.getCurrentNavigation().extras.state.dataAll;
         console.log(" idddddd "+_self.dd.product_id);
       }
     });
  }

  ngOnInit() {
  }

}
