import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAboutDoctorComponent } from './doctor-about-doctor.component';

describe('DoctorAboutDoctorComponent', () => {
  let component: DoctorAboutDoctorComponent;
  let fixture: ComponentFixture<DoctorAboutDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorAboutDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorAboutDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
