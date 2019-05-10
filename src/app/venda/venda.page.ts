import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import * as firebase from 'firebase';
import { ModalVenderProdutoPage } from '../modal-vender-produto/modal-vender-produto.page';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.page.html',
  styleUrls: ['./venda.page.scss'],
})
export class VendaPage implements OnInit {
  produtos: any  = []
  valor: any  = []
  produtosSelecionados: any [] = []

  constructor(
    private loadingController: LoadingController,
    private modalController: ModalController
  ) {
    this.getProdutos();
  }
  async btnSelecionarProduto(value){
      const modal = await this.modalController.create({
        component: ModalVenderProdutoPage,
        componentProps: {
          produtoSelecionado: value
        }
      });
      return await modal.present();

  }
  async getProdutos(){
    const loading = await this.loadingController.create({
      message: 'Carregando itens',
    });
    await loading.present();

    firebase.database().ref('produto/').on('value', docs => {
      this.produtos = [];
      docs.forEach((doc) => {
        this.produtos.push((doc.val()))
      })  
      console.log(this.produtos)
      loading.dismiss();
    })
  }

  addProduto = (item) => {
    this.produtosSelecionados.push(item)
    try{ 
      this.produtosSelecionados.map(valor => item === item && console.log('iguais'))
    }catch{
      alert('deu erro')
    }
  }

  runTimeChange(ev: any) {
    let val = ev.target.value;
    console.log(val)
  }

  adicionar(){

  }

  remover(id){
    this.produtosSelecionados.filter(item => item.produtoKey === id && console.log(item))
  }

  btnVender(e: any){
    let val = e.target.value;
    console.log(val)
    this.produtosSelecionados.map(item => console.log(item.qtd))
  }
  
  ngOnInit() {
  }

}
