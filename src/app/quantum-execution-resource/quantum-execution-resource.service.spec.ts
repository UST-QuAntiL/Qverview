import { TestBed } from '@angular/core/testing';

import { QuantumExecutionResourceService } from './quantum-execution-resource.service';

describe('QuantumComputationResourceService', () => {
  let service: QuantumExecutionResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuantumExecutionResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
