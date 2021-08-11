import { TestBed } from '@angular/core/testing';

import { CalendarGlobaleService } from './calendar-globale.service';

describe('CalendarGlobaleService', () => {
  let service: CalendarGlobaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarGlobaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
