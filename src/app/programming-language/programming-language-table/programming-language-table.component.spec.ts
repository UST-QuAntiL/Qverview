import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingLanguageTableComponent } from './programming-language-table.component';

describe('ProgrammingLanguageTableComponent', () => {
  let component: ProgrammingLanguageTableComponent;
  let fixture: ComponentFixture<ProgrammingLanguageTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammingLanguageTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammingLanguageTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
