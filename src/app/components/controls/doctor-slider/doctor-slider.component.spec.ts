import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorSliderComponent } from './doctor-slider.component';

describe('DoctorSliderComponent', () => {
  let component: DoctorSliderComponent;
  let fixture: ComponentFixture<DoctorSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
