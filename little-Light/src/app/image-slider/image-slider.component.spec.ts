import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePageSliderComponent } from './image-slider.component';

describe('HomePageSliderComponent', () => {
  let component: HomePageSliderComponent;
  let fixture: ComponentFixture<HomePageSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

