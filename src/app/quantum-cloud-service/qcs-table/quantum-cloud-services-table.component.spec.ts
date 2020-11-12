import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantumCloudServicesTableComponent } from './quantum-cloud-services-table.component';

describe('QuantumCloudServicesTableComponent', () => {
  let component: QuantumCloudServicesTableComponent;
  let fixture: ComponentFixture<QuantumCloudServicesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantumCloudServicesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantumCloudServicesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
