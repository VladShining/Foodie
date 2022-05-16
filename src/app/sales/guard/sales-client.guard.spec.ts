import { TestBed } from '@angular/core/testing';

import { SalesClientGuard } from './sales-client.guard';

describe('SalesClientGuard', () => {
  let guard: SalesClientGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SalesClientGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
