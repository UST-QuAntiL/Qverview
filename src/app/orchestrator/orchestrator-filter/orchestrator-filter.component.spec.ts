import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrchestratorFilterComponent } from './orchestrator-filter.component';

describe('OrchestratorFilterComponent', () => {
  let component: OrchestratorFilterComponent;
  let fixture: ComponentFixture<OrchestratorFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrchestratorFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrchestratorFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
