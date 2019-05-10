import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import * as firebase from 'firebase'
@Component({
  selector: 'app-modificar-produto',
  templateUrl: './modificar-produto.page.html',
  styleUrls: ['./modificar-produto.page.scss'],
})
export class ModificarProdutoPage implements OnInit {
  value: string = this.navParams.get('key');
  produto: any [] = [];
  produtoUpdate = {
    produtoNome: "",
    produtoMarca: "",
    produtoValor: 0,
    produtoQtd: 0,
    produtoKey: "",
    produtoUid: "",
    produtoFornecedor: ""
  }
  constructor(
    private modal: ModalController,
    private navParams: NavParams
    ) {
      this.getProdutos(this.value)
    }
    
    btnClose(){
      this.modal.dismiss();
    }
    
    getProdutos(key){
      let api = firebase.database().ref(`/produto/${key}`)
      this.produto = []
      return api.on('value', docs => {
        docs.forEach((doc) => {
          this.produto.push(doc.val())
        })
        if(this.produto.length !== 0){
          this.produtoUpdate.produtoFornecedor = this.produto[0],
          this.produtoUpdate.produtoMarca = this.produto[1],
          this.produtoUpdate.produtoNome = this.produto[2],
          this.produtoUpdate.produtoKey = this.produto[3],
          this.produtoUpdate.produtoQtd = this.produto[4],
          this.produtoUpdate.produtoUid = this.produto[5]
          this.produtoUpdate.produtoValor = this.produto[6]
        }
      });
    }
    
    btnUpdate(array){
      console.log(array)
      firebase.database().ref('/produto/').child(array.produtoKey).set({
        produtoKey: array.produtoKey,
        uid: array.produtoUid,
        produto:  array.produtoNome,
        marca: array.produtoMarca,
        valor:  array.produtoValor,
        qtd: array.produtoQtd,
        fornecedor: array.produtoFornecedor,
      })
    }
    
    btnLimpar = () => {
      this.produtoUpdate.produtoFornecedor = "",
      this.produtoUpdate.produtoMarca = "",
      this.produtoUpdate.produtoNome = "",
      this.produtoUpdate.produtoKey = "",
      this.produtoUpdate.produtoQtd = null,
      this.produtoUpdate.produtoUid = "",
      this.produtoUpdate.produtoValor = null
    }
    
    ngOnInit() { }
    
  }
  