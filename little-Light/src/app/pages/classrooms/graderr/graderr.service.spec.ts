import { TestBed } from '@angular/core/testing';

import { GraderrService } from './graderr.service';

describe('GraderrService', () => {
  let service: GraderrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraderrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
