import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomSliderComponent } from './classroom-slider.component';

describe('ClassroomSliderComponent', () => {
  let component: ClassroomSliderComponent;
  let fixture: ComponentFixture<ClassroomSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassroomSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
