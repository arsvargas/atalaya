import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSupervisionComponent } from './admin-supervision.component';

describe('AdminSupervisionComponent', () => {
  let component: AdminSupervisionComponent;
  let fixture: ComponentFixture<AdminSupervisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSupervisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSupervisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
