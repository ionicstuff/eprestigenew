import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InteractPage } from './interact.page';

const routes: Routes = [
  {
    path: '',
    component: InteractPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InteractPageRoutingModule {}
