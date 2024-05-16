import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OvernightSleepPage } from './overnight-sleep.page';

describe('OvernightSleepPage', () => {
  let component: OvernightSleepPage;
  let fixture: ComponentFixture<OvernightSleepPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OvernightSleepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
