import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingLanguageFilterComponent } from './programming-language-filter.component';

describe('ProgrammingLanguageFilterComponent', () => {
  let component: ProgrammingLanguageFilterComponent;
  let fixture: ComponentFixture<ProgrammingLanguageFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammingLanguageFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammingLanguageFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
