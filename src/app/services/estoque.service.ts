import { Injectable } from '@angular/core';
import * as firebase from 'firebase'

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {
  constructor() {}
  
  cadastrarProduto = produtoDados => {
    let api = firebase.database().ref('produto/').push();
    api.set({
      produtoKey: api.key,
      uid: produtoDados.uid,
      prduto: produtoDados.produtoNome,
      marca: produtoDados.produtoMarca,
      valor: produtoDados.produtoValor,
      qtd: produtoDados.produtoQtd,
      fornecedor: produtoDados.produtoFornecedor
    }).then(() => {
      console.log('gravado no banco')
    }).catch((err) => {
      console.log(err);
    })
  }
  
  getProdutos(array){
    let api = firebase.database().ref('produto/')
    return api.on('value', docs => {
      array = [];
      docs.forEach((doc) => {
        array.push((doc.val()))
      })
      console.log(array)
    });
  }
}
