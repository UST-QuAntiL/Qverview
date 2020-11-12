import { TestBed } from '@angular/core/testing';

import { SdkFilterUpdateService } from './sdk-filter-update.service';

describe('FilterUpdateService', () => {
  let service: SdkFilterUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SdkFilterUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
