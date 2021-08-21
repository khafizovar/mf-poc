import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GtmPartModuleComponent } from './gtm-part-module.component';

describe('GtmPartModuleComponent', () => {
  let component: GtmPartModuleComponent;
  let fixture: ComponentFixture<GtmPartModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GtmPartModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GtmPartModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
