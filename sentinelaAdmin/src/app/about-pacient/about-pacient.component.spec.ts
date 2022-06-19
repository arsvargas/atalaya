import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPacientComponent } from './about-pacient.component';

describe('AboutPacientComponent', () => {
  let component: AboutPacientComponent;
  let fixture: ComponentFixture<AboutPacientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPacientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPacientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
