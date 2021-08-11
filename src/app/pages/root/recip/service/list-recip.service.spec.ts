import { TestBed } from '@angular/core/testing';

import { ListRecipService } from './list-recip.service';

describe('ListRecipService', () => {
  let service: ListRecipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListRecipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
