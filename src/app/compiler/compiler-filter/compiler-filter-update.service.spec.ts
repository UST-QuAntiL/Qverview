import { TestBed } from '@angular/core/testing';

import { CompilerFilterUpdateService } from './compiler-filter-update.service';

describe('CompilerFilterUpdateService', () => {
  let service: CompilerFilterUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompilerFilterUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
