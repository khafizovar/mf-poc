import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondRouteComponentComponent } from './second-route-component.component';

describe('SecondRouteComponentComponent', () => {
  let component: SecondRouteComponentComponent;
  let fixture: ComponentFixture<SecondRouteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondRouteComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondRouteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
