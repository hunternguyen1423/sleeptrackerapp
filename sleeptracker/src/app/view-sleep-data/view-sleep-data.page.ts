import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { Router } from '@angular/router';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

@Component({
  selector: 'app-view-sleep-data',
  templateUrl: './view-sleep-data.page.html',
  styleUrls: ['./view-sleep-data.page.scss'],
})
export class ViewSleepDataPage implements OnInit {
  activeSegment: string = 'sleep';
  loggedSleepData?: OvernightSleepData[];
  loggedSleepinessData?: StanfordSleepinessData[];

  constructor(private sleepService: SleepService, private router: Router) { }

  ngOnInit() {
    this.loggedSleepData = this.sleepService.getAllOvernightData();
    this.loggedSleepinessData = this.sleepService.getAllSleepinessData();
  }
  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }
  
}
