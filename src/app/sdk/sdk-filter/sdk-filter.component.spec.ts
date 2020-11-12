import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdkFilterComponent } from './sdk-filter.component';

describe('FilterComponent', () => {
  let component: SdkFilterComponent;
  let fixture: ComponentFixture<SdkFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdkFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdkFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
