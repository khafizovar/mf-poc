import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleLazyLoadingComponent } from './simple-lazy-loading.component';

describe('SimpleLazyLoadingComponent', () => {
  let component: SimpleLazyLoadingComponent;
  let fixture: ComponentFixture<SimpleLazyLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleLazyLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleLazyLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
