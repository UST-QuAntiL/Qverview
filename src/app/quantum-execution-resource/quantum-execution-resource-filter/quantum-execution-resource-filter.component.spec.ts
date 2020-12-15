import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantumExecutionResourceFilterComponent } from './quantum-execution-resource-filter.component';

describe('QuantumExecutionResourceFilterComponent', () => {
  let component: QuantumExecutionResourceFilterComponent;
  let fixture: ComponentFixture<QuantumExecutionResourceFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantumExecutionResourceFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantumExecutionResourceFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
