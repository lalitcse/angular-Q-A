import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Window7Component } from './window7.component';

describe('Window7Component', () => {
  let component: Window7Component;
  let fixture: ComponentFixture<Window7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Window7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Window7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
