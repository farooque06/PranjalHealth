import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryOptComponent } from './gallery-opt.component';

describe('GalleryOptComponent', () => {
  let component: GalleryOptComponent;
  let fixture: ComponentFixture<GalleryOptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryOptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryOptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
