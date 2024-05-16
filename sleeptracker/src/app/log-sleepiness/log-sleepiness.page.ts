import { Component, OnInit } from '@angular/core';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { Router } from '@angular/router';
import { SleepService } from '../services/sleep.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-log-sleepiness',
  templateUrl: './log-sleepiness.page.html',
  styleUrls: ['./log-sleepiness.page.scss'],
})
export class LogSleepinessPage implements OnInit {
  sleepinessValue: number = 1;

  constructor( private router: Router, private sleepService: SleepService, private toastController: ToastController,) { }

  logSleepiness() {
    const sleepinessData = new StanfordSleepinessData(this.sleepinessValue, new Date());
    this.sleepService.logSleepinessData(sleepinessData);
    this.presentToast('Sleepiness data logged successfully');
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 500
    });
    toast.present();
  }

  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }
  

  ngOnInit(): void {
  }

}
