import { TestBed } from '@angular/core/testing';

import { UserLimiterService } from './user-limiter.service';

describe('UserLimiterService', () => {
  let service: UserLimiterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserLimiterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
