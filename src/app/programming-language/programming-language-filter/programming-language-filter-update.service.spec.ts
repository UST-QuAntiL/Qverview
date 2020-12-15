import { TestBed } from '@angular/core/testing';

import { ProgrammingLanguageFilterUpdateService } from './programming-language-filter-update.service';

describe('ProgrammingLanguageFilterUpdateServiceService', () => {
  let service: ProgrammingLanguageFilterUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgrammingLanguageFilterUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
