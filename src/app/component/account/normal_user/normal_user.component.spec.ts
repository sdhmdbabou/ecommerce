/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Normal_userComponent } from './normal_user.component';

describe('Normal_userComponent', () => {
  let component: Normal_userComponent;
  let fixture: ComponentFixture<Normal_userComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Normal_userComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Normal_userComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
