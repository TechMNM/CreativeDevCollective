import { TestBed } from '@angular/core/testing';

import { Preschoolclass02Service } from './preschoolclass02.service';

describe('Preschoolclass02Service', () => {
  let service: Preschoolclass02Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Preschoolclass02Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
