import { TestBed } from '@angular/core/testing';

import { Preschoolclass01Service } from './preschoolclass01.service';

describe('Preschoolclass01Service', () => {
  let service: Preschoolclass01Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Preschoolclass01Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
