import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoffeeCornerPageRoutingModule } from './coffee-corner-routing.module';

import { CoffeeCornerPage } from './coffee-corner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoffeeCornerPageRoutingModule
  ],
  declarations: [CoffeeCornerPage]
})
export class CoffeeCornerPageModule {}
