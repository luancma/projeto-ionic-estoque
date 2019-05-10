import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {  LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as firebase from 'firebase'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  produtos: any [] = [];
  pesquisa: string = "";

  constructor(
    private loginService: AuthService,
    private router: Router,
    private loadingController: LoadingController,
    ){
      this.getProdutos()
    }

    selectProduto(){
      alert('produto')
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

    btnVenda(){
      this.router.navigateByUrl('venda')
    }

    btnIrVendas(){
      this.router.navigateByUrl('vendas-controle')
    }

    btnLogout(){
      this.loginService.logout()
    }
    
    btnEstoque(){
      this.router.navigateByUrl('estoque')
    }
    
  }
  