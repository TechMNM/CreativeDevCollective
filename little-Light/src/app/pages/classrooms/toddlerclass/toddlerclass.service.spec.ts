import { TestBed } from '@angular/core/testing';

import { ToddlerclassService } from './toddlerclass.service';

describe('ToddlerclassService', () => {
  let service: ToddlerclassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToddlerclassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
