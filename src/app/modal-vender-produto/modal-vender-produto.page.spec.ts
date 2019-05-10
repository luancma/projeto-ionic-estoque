import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVenderProdutoPage } from './modal-vender-produto.page';

describe('ModalVenderProdutoPage', () => {
  let component: ModalVenderProdutoPage;
  let fixture: ComponentFixture<ModalVenderProdutoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalVenderProdutoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVenderProdutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
