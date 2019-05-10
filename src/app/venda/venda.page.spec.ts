import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaPage } from './venda.page';

describe('VendaPage', () => {
  let component: VendaPage;
  let fixture: ComponentFixture<VendaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
