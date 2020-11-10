import { TestBed } from '@angular/core/testing';

import { QuantumComputationResourceService } from './quantum-computation-resource.service';

describe('QuantumComputationResourceService', () => {
  let service: QuantumComputationResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuantumComputationResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
