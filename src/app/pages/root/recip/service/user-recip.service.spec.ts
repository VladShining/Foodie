import { TestBed } from '@angular/core/testing';

import { UserRecipService } from './user-recip.service';

describe('UserRecipService', () => {
  let service: UserRecipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRecipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
