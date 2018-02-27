import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveAssistanceComponent } from './give-assistance.component';

describe('GiveAssistanceComponent', () => {
  let component: GiveAssistanceComponent;
  let fixture: ComponentFixture<GiveAssistanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveAssistanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
