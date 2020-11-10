import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantumComputationResourcesTableComponent } from './quantum-computation-resources-table.component';

describe('QuantumComputationResourcesTableComponent', () => {
  let component: QuantumComputationResourcesTableComponent;
  let fixture: ComponentFixture<QuantumComputationResourcesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantumComputationResourcesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantumComputationResourcesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
