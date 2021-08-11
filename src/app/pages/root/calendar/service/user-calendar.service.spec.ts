import { TestBed } from '@angular/core/testing';

import { UserCalendarService } from './user-calendar.service';

describe('UserCalendarService', () => {
  let service: UserCalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
