import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OvernightSleepPage } from './overnight-sleep.page';

const routes: Routes = [
  {
    path: '',
    component: OvernightSleepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OvernightSleepPageRoutingModule {}
