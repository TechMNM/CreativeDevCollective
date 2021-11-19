import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Preschoolclass01Component } from './preschoolclass01.component';

describe('Preschoolclass01Component', () => {
  let component: Preschoolclass01Component;
  let fixture: ComponentFixture<Preschoolclass01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Preschoolclass01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Preschoolclass01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
