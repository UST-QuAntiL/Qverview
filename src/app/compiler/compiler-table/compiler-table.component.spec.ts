import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompilerTableComponent } from './compiler-table.component';

describe('CompilerTableComponent', () => {
  let component: CompilerTableComponent;
  let fixture: ComponentFixture<CompilerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompilerTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompilerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
