import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsAllListPageRoutingModule } from './details-all-list-routing.module';

import { DetailsAllListPage } from './details-all-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsAllListPageRoutingModule
  ],
  declarations: [DetailsAllListPage]
})
export class DetailsAllListPageModule {}
