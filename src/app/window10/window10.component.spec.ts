import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Window10Component } from './window10.component';

describe('Window10Component', () => {
  let component: Window10Component;
  let fixture: ComponentFixture<Window10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Window10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Window10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
