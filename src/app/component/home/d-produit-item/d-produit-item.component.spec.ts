/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DProduitItemComponent } from './d-produit-item.component';

describe('DProduitItemComponent', () => {
  let component: DProduitItemComponent;
  let fixture: ComponentFixture<DProduitItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DProduitItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DProduitItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
