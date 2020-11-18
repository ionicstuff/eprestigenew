import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuySellPageRoutingModule } from './buy-sell-routing.module';

import { BuySellPage } from './buy-sell.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuySellPageRoutingModule
  ],
  declarations: [BuySellPage]
})
export class BuySellPageModule {}
