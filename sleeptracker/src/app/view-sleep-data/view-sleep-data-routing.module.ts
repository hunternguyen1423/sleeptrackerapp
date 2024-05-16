import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewSleepDataPage } from './view-sleep-data.page';

const routes: Routes = [
  {
    path: '',
    component: ViewSleepDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewSleepDataPageRoutingModule {}
