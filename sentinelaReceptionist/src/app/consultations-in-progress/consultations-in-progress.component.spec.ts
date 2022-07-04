import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationsInProgressComponent } from './consultations-in-progress.component';

describe('ConsultationsInProgressComponent', () => {
  let component: ConsultationsInProgressComponent;
  let fixture: ComponentFixture<ConsultationsInProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationsInProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationsInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
