import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageGraphComponent } from './language-graph.component';

describe('ConversionGraphComponent', () => {
  let component: LanguageGraphComponent;
  let fixture: ComponentFixture<LanguageGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
