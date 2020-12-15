import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompilerFilterComponent } from './compiler-filter.component';

describe('CompilerFilterComponent', () => {
  let component: CompilerFilterComponent;
  let fixture: ComponentFixture<CompilerFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompilerFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompilerFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
