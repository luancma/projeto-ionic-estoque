import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'
@Component({
  selector: 'app-vendas-controle',
  templateUrl: './vendas-controle.page.html',
  styleUrls: ['./vendas-controle.page.scss'],
})
export class VendasControlePage implements OnInit {
  produtosVendidos: any = [];
  teste: any = [];
  lucroTotal: number = undefined
  constructor() {
    this.getProdutos()
   }

  getProdutos(){
    let api = firebase.database().ref('venda/')
    return api.on('value', docs => {
      this.produtosVendidos = [];
      docs.forEach((doc) => {
        this.produtosVendidos.push((doc.val()))
      })
      this.produtosVendidos.forEach((doc) => {
        this.teste.push((doc.valorVenda))
      })
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      this.lucroTotal= this.teste.reduce(reducer)
    })
  }

  ngOnInit() {
  }

}
