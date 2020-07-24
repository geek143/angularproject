import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ncard2Component } from './ncard2.component';

describe('Ncard2Component', () => {
  let component: Ncard2Component;
  let fixture: ComponentFixture<Ncard2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ncard2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ncard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
