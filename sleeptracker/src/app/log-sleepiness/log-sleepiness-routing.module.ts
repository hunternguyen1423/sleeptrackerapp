import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogSleepinessPage } from './log-sleepiness.page';

const routes: Routes = [
  {
    path: '',
    component: LogSleepinessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogSleepinessPageRoutingModule {}
