import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendasControlePage } from './vendas-controle.page';

describe('VendasControlePage', () => {
  let component: VendasControlePage;
  let fixture: ComponentFixture<VendasControlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendasControlePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendasControlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
