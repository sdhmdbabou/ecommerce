/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Test_imageComponent } from './test_image.component';

describe('Test_imageComponent', () => {
  let component: Test_imageComponent;
  let fixture: ComponentFixture<Test_imageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test_imageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test_imageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
