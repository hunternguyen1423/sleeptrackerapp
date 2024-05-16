import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogSleepinessPageRoutingModule } from './log-sleepiness-routing.module';

import { LogSleepinessPage } from './log-sleepiness.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogSleepinessPageRoutingModule
  ],
  declarations: [LogSleepinessPage]
})
export class LogSleepinessPageModule {}
