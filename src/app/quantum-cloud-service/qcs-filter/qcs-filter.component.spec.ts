import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcsFilterComponent } from './qcs-filter.component';

describe('QcsFilterComponent', () => {
  let component: QcsFilterComponent;
  let fixture: ComponentFixture<QcsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QcsFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QcsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
