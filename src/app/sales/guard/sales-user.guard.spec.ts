import { TestBed } from '@angular/core/testing';

import { SalesUserGuard } from './sales-user.guard';

describe('SalesUserGuard', () => {
  let guard: SalesUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SalesUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
