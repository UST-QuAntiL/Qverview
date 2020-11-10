import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrchestratorsTableComponent } from './orchestrators-table.component';

describe('OrchestratorsTableComponent', () => {
  let component: OrchestratorsTableComponent;
  let fixture: ComponentFixture<OrchestratorsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrchestratorsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrchestratorsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
