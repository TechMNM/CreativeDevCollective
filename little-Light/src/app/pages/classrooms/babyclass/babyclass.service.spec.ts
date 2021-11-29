import { TestBed } from '@angular/core/testing';

import { BabyclassService } from './babyclass.service';

describe('BabyclassService', () => {
  let service: BabyclassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BabyclassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
