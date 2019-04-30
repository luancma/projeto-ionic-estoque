import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Capacitor, Plugins, CameraSource, CameraResultType } from '@capacitor/core';
import { ModalController, ToastController } from '@ionic/angular';;
import { EstoqueService } from '../services/estoque.service';
import * as firebase from 'firebase';


@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.page.html',
  styleUrls: ['./cadastrar-produto.page.scss'],
})
export class CadastrarProdutoPage implements OnInit {
  @Output() imagePick = new EventEmitter<string>();
  selectedImage: string;

  produtoDados = {
    uid: firebase.auth().currentUser.uid,
    produtoNome: '',
    produtoMarca: '',
    produtoValor: '',
    produtoQtd: '',
    produtoFornecedor: ''
  }
  constructor(
    private modal: ModalController,
    private estoqueService: EstoqueService,
    private toastController: ToastController,
  ) {}




  async btnCadastrarProduto(){
    this.estoqueService.cadastrarProduto(this.produtoDados);
    this.btnClose();
    const toast = await this.toastController.create({
      message: 'Salvo com sucesso.',
      duration: 2000
    });
    toast.present();
  }
 
  btnClose(){
    this.modal.dismiss();
  }



  btnLimpar(){
    this.produtoDados.produtoNome = ""
    this.produtoDados.produtoMarca = ""
    this.produtoDados.produtoValor = ""
    this.produtoDados.produtoQtd = ""
    this.produtoDados.produtoFornecedor = ""
  }

  ngOnInit() {

  }

}
