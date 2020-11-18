import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoffeeCornerPage } from './coffee-corner.page';

const routes: Routes = [
  {
    path: '',
    component: CoffeeCornerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoffeeCornerPageRoutingModule {}
