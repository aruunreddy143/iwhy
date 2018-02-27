import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SameDayTravellingComponent } from './same-day-travelling.component';

describe('SameDayTravellingComponent', () => {
  let component: SameDayTravellingComponent;
  let fixture: ComponentFixture<SameDayTravellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SameDayTravellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SameDayTravellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
