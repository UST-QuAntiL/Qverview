import { TestBed } from '@angular/core/testing';

import { OrchestratorFilterUpdateService } from './orchestrator-filter-update.service';

describe('OrchestratorFilterUpdateService', () => {
  let service: OrchestratorFilterUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrchestratorFilterUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
