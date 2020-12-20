import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncQcsQerButtonComponent } from './sync-qcs-qer-button.component';

describe('SyncQcsQerButtonComponent', () => {
  let component: SyncQcsQerButtonComponent;
  let fixture: ComponentFixture<SyncQcsQerButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyncQcsQerButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SyncQcsQerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
