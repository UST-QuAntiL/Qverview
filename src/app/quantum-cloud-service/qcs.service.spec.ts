import { TestBed } from '@angular/core/testing';

import { QcsService } from './qcs.service';

describe('QcsService', () => {
  let service: QcsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QcsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
