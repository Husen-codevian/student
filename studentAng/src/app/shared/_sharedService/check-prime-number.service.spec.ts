import { TestBed } from '@angular/core/testing';

import { CheckPrimeNumberService } from './check-prime-number.service';

describe('CheckPrimeNumberService', () => {
  let service: CheckPrimeNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckPrimeNumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
