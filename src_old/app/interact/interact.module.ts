import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InteractPageRoutingModule } from './interact-routing.module';

import { InteractPage } from './interact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InteractPageRoutingModule
  ],
  declarations: [InteractPage]
})
export class InteractPageModule {}
