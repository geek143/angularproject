import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ncard1Component } from './ncard1.component';

describe('Ncard1Component', () => {
  let component: Ncard1Component;
  let fixture: ComponentFixture<Ncard1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ncard1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ncard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
