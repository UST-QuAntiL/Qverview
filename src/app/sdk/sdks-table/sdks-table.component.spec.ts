import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdksTableComponent } from './sdks-table.component';

describe('SdksTableComponent', () => {
  let component: SdksTableComponent;
  let fixture: ComponentFixture<SdksTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdksTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdksTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
