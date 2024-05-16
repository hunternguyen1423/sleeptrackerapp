import { Injectable } from '@angular/core';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { Preferences } from '@capacitor/preferences';

interface OvernightSleepDataJSON {
	sleepStart: string;
	sleepEnd: string;
  }
  
  interface StanfordSleepinessDataJSON {
	loggedValue: number;
	loggedAt: string;
  }

@Injectable({
  providedIn: 'root'
})
export class SleepService {
  private static readonly OVERNIGHT_DATA_KEY = 'overnight_data';
  private static readonly SLEEPINESS_DATA_KEY = 'sleepiness_data';

  public static AllOvernightData: OvernightSleepData[] = [];
  public static AllSleepinessData: StanfordSleepinessData[] = [];

  constructor() {
    this.loadAllData();
  }

	private async loadAllData() {
	const overnightData = await Preferences.get({ key: SleepService.OVERNIGHT_DATA_KEY });
	if (overnightData.value) {
		const parsedOvernightData: OvernightSleepDataJSON[] = JSON.parse(overnightData.value);
		SleepService.AllOvernightData = parsedOvernightData.map((item: OvernightSleepDataJSON) => 
		new OvernightSleepData(new Date(item.sleepStart), new Date(item.sleepEnd))
		);
	}

	const sleepinessData = await Preferences.get({ key: SleepService.SLEEPINESS_DATA_KEY });
	if (sleepinessData.value) {
		const parsedSleepinessData: StanfordSleepinessDataJSON[] = JSON.parse(sleepinessData.value);
		SleepService.AllSleepinessData = parsedSleepinessData.map((item: StanfordSleepinessDataJSON) => 
		new StanfordSleepinessData(item.loggedValue, new Date(item.loggedAt))
		);
	}
	
	console.log("loaded,", SleepService.AllSleepinessData);
	}


  
  public async logOvernightData(sleepData: OvernightSleepData) {
    SleepService.AllOvernightData.push(sleepData);
    await Preferences.set({
      key: SleepService.OVERNIGHT_DATA_KEY,
      value: JSON.stringify(SleepService.AllOvernightData)
    });
  }

  public async logSleepinessData(sleepData: StanfordSleepinessData) {
    SleepService.AllSleepinessData.push(sleepData);
    await Preferences.set({
      key: SleepService.SLEEPINESS_DATA_KEY,
      value: JSON.stringify(SleepService.AllSleepinessData)
    });
  }

  public getAllOvernightData(): OvernightSleepData[] {
    return SleepService.AllOvernightData;
  }

  public getAllSleepinessData(): StanfordSleepinessData[] {
    return SleepService.AllSleepinessData;
  }
}
