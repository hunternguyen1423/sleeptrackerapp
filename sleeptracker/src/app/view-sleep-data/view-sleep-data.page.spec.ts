import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewSleepDataPage } from './view-sleep-data.page';

describe('ViewSleepDataPage', () => {
  let component: ViewSleepDataPage;
  let fixture: ComponentFixture<ViewSleepDataPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewSleepDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
