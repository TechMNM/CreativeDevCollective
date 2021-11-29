import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToddlerclassComponent } from './toddlerclass.component';

describe('ToddlerclassComponent', () => {
  let component: ToddlerclassComponent;
  let fixture: ComponentFixture<ToddlerclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToddlerclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToddlerclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
