import { TestBed } from '@angular/core/testing';

import { FilterUpdateService } from './filter-update.service';

describe('FilterUpdateService', () => {
  let service: FilterUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
