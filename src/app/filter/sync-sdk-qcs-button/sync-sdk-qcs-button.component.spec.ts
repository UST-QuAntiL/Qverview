import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncSdkQcsButtonComponent } from './sync-sdk-qcs-button.component';

describe('SyncSdkCloudServiceButtonComponent', () => {
  let component: SyncSdkQcsButtonComponent;
  let fixture: ComponentFixture<SyncSdkQcsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyncSdkQcsButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SyncSdkQcsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
