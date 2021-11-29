import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyclassComponent } from './babyclass.component';

describe('BabyclassComponent', () => {
  let component: BabyclassComponent;
  let fixture: ComponentFixture<BabyclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabyclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
