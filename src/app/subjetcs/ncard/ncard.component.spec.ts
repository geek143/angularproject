import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NcardComponent } from './ncard.component';

describe('NcardComponent', () => {
  let component: NcardComponent;
  let fixture: ComponentFixture<NcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
