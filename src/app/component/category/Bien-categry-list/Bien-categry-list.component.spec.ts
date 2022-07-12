/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BienCategryListComponent } from './Bien-categry-list.component';

describe('BienCategryListComponent', () => {
  let component: BienCategryListComponent;
  let fixture: ComponentFixture<BienCategryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BienCategryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BienCategryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
