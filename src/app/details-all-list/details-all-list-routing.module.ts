import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsAllListPage } from './details-all-list.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsAllListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsAllListPageRoutingModule {}
