import { TestBed } from '@angular/core/testing';

import { CheckOutGuardService } from './check-out-guard.service';

describe('CheckOutGuardService', () => {
  let service: CheckOutGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckOutGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
