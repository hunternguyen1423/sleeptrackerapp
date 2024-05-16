import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogSleepinessPage } from './log-sleepiness.page';

describe('LogSleepinessPage', () => {
  let component: LogSleepinessPage;
  let fixture: ComponentFixture<LogSleepinessPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LogSleepinessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
