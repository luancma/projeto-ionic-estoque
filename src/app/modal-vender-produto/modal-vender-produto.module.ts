import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalVenderProdutoPage } from './modal-vender-produto.page';

const routes: Routes = [
  {
    path: '',
    component: ModalVenderProdutoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalVenderProdutoPage]
})
export class ModalVenderProdutoPageModule {}
