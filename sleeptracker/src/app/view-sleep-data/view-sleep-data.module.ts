import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewSleepDataPageRoutingModule } from './view-sleep-data-routing.module';

import { ViewSleepDataPage } from './view-sleep-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewSleepDataPageRoutingModule
  ],
  declarations: [ViewSleepDataPage]
})
export class ViewSleepDataPageModule {}
