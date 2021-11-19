import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraderrComponent } from './graderr.component';

describe('GraderrComponent', () => {
  let component: GraderrComponent;
  let fixture: ComponentFixture<GraderrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraderrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraderrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
