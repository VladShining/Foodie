import { TestBed } from '@angular/core/testing';

import { UsersPrivilegeGuard } from './users-privilege.guard';

describe('UsersPrivilegeGuard', () => {
  let guard: UsersPrivilegeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UsersPrivilegeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
