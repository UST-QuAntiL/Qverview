import { TestBed } from '@angular/core/testing';

import { QerFilterUpdateService } from './qer-filter-update.service';

describe('QuantumExecutionResourceUpdateService', () => {
  let service: QerFilterUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QerFilterUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
