import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'overnight-sleep',
    pathMatch: 'full'
  },
  {
    path: 'overnight-sleep',
    loadChildren: () => import('./overnight-sleep/overnight-sleep.module').then( m => m.OvernightSleepPageModule)
  },
  {
    path: 'view-sleep-data',
    loadChildren: () => import('./view-sleep-data/view-sleep-data.module').then( m => m.ViewSleepDataPageModule)
  },  {
    path: 'log-sleepiness',
    loadChildren: () => import('./log-sleepiness/log-sleepiness.module').then( m => m.LogSleepinessPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
