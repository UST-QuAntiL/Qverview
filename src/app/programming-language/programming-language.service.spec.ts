import { TestBed } from '@angular/core/testing';

import { ProgrammingLanguageService } from './programming-language.service';

describe('ProgrammingLanguageService', () => {
  let service: ProgrammingLanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgrammingLanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
