import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantumExecutionResourcesTableComponent } from './quantum-execution-resources-table.component';

describe('QuantumComputationResourcesTableComponent', () => {
  let component: QuantumExecutionResourcesTableComponent;
  let fixture: ComponentFixture<QuantumExecutionResourcesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantumExecutionResourcesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantumExecutionResourcesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
