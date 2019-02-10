import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Window8Component } from './window8.component';

describe('Window8Component', () => {
  let component: Window8Component;
  let fixture: ComponentFixture<Window8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Window8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Window8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
