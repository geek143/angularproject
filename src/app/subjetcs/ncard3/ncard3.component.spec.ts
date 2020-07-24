import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ncard3Component } from './ncard3.component';

describe('Ncard3Component', () => {
  let component: Ncard3Component;
  let fixture: ComponentFixture<Ncard3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ncard3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ncard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
