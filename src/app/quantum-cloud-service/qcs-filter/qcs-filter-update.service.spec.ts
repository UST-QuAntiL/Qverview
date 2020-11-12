import { TestBed } from '@angular/core/testing';

import { QcsFilterUpdateService } from './qcs-filter-update.service';

describe('QcsFilterUpdateService', () => {
  let service: QcsFilterUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QcsFilterUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
