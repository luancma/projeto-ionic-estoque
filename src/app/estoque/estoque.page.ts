import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CadastrarProdutoPage } from '../cadastrar-produto/cadastrar-produto.page';
import * as firebase from 'firebase'
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.page.html',
  styleUrls: ['./estoque.page.scss'],
})
export class EstoquePage implements OnInit {
  produtos:any [] = []
  constructor(
    private menu: MenuController, 
    private auth: AuthService,
    public modalController: ModalController,
    public loadingController: LoadingController
    ) {
      this.getProdutos();
    }
    
    async presentModal() {
      const modal = await this.modalController.create({
        component: CadastrarProdutoPage,
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

    btnDelete(id){
      var adaRef = firebase.database().ref(`produto/${id}`);
      adaRef.remove()
        .then(function() {
          console.log("Remove succeeded.")
        })
        .catch(function(error) {
          console.log("Remove failed: " + error.message)
        });
    }
    
    btnOpenModal(){
      console.log('abrir modal');
    }
    
    btnLogout(){
      this.auth.logout();
    }
    
    ngOnInit() {
    }
    
  }
  