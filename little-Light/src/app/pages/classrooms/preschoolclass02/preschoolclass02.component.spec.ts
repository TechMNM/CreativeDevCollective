import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Preschoolclass02Component } from './preschoolclass02.component';

describe('Preschoolclass02Component', () => {
  let component: Preschoolclass02Component;
  let fixture: ComponentFixture<Preschoolclass02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Preschoolclass02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Preschoolclass02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
