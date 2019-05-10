import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import * as firebase from 'firebase'

@Component({
  selector: 'app-modal-vender-produto',
  templateUrl: './modal-vender-produto.page.html',
  styleUrls: ['./modal-vender-produto.page.scss'],
})
export class ModalVenderProdutoPage implements OnInit {
  value: any = this.navParams.get('produtoSelecionado');
  valorInput: number = undefined;
  constructor(
    private navParams: NavParams,
    private modal: ModalController
  ) { 
    console.log(this.value)
  }
  btnVender(){
    let valor1 = this.valorInput;
    const valor2 = this.value.qtd
    let calculo = valor2 - valor1;
    let valorVenda = valor1 * this.value.valor
    firebase.database().ref('produto').child(this.value.produtoKey)
      .update({qtd: calculo})
      .then(() => {
        let api = firebase.database().ref('venda/').push();
        api.set({
          vendaKey: api.key,
          uid: firebase.auth().currentUser.uid,
          produtoId: this.value.produtoKey,
          produtoNome: this.value.produto,
          fornecedor: this.value.fornecedor,
          qtdComprada: valor1,
          valorVenda: valorVenda
        }).then(() => {
          console.log('gravado no banco')
        }).catch((err) => {
          console.log(err);
        })
      }).then(() =>{this.btnClose() })
      .catch(error => console.log(error))
  }
  btnClose(){
    this.modal.dismiss();
  }

  ngOnInit() {
  }

}
