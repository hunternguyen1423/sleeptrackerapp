import { Component, OnInit } from '@angular/core';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { ToastController } from '@ionic/angular';
import { SleepService } from '../services/sleep.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overnight-sleep',
  templateUrl: './overnight-sleep.page.html',
  styleUrls: ['./overnight-sleep.page.scss'],
})
export class OvernightSleepPage implements OnInit {
  sleepStart?: Date;
  sleepEnd?: Date;
  sleepData?: OvernightSleepData;
  showStartPicker = false;
  showEndPicker = false;

  constructor(private toastController: ToastController, private sleepService: SleepService, private router: Router) { }

  ngOnInit() {
  }

  showDateTimePicker(type: 'start' | 'end') {
    if (type === 'start') {
      this.showStartPicker ? this.showStartPicker = false : this.showStartPicker = true;
    } else if (type === 'end') {
      this.showEndPicker ? this.showEndPicker = false : this.showEndPicker = true;

    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1000
    });
    toast.present();
  }
  

  logSleep() {
    if (this.sleepStart && this.sleepEnd) {
      const sleepStart = new Date(this.sleepStart);
      const sleepEnd = new Date(this.sleepEnd);
      const oneDay = 24 * 60 * 60 * 1000; // Milliseconds in one day
  
      // Check if the sleep end is before the sleep start or duration is more than 24 hours
      if (sleepEnd.getTime() <= sleepStart.getTime()){
        this.presentToast('Wake up time cannot be before sleep time');
      } 
      else if ((sleepEnd.getTime() - sleepStart.getTime()) > oneDay) {
        this.presentToast('Sleep duration too long, enter valid times.');
      }
      else {
        this.sleepData = new OvernightSleepData(sleepStart, sleepEnd);
        this.sleepService.logOvernightData(this.sleepData);
        this.presentToast('Sleep data logged successfully');
      }
    } else {
      this.presentToast('Please select both start and end times');
    }
  }
  
  navigateTo(route: string) {
      this.router.navigateByUrl(route);
    }
}
