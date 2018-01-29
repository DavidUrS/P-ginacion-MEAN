import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpalComponent } from './ppal.component';

describe('PpalComponent', () => {
  let component: PpalComponent;
  let fixture: ComponentFixture<PpalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
