import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.page.html',
  styleUrls: ['./criar-usuario.page.scss'],
})
export class CriarUsuarioPage implements OnInit {
  email: string = ""
  confirmarEmail: string = ""
  senha: string = ""
  confirmarSenhar: string = ""
  nome: string = ""
  sobrenome: string = ""
  constructor(
    private loginService : AuthService, 
  ) { }

  btnLogar(){
    if(this.email === '' || this.senha === '' || this.confirmarEmail === '' || this.confirmarSenhar === ''){
      alert('vazio')
    }
    else if(this.email === this.confirmarEmail && this.senha === this.confirmarSenhar){
      this.loginService.createUser(this.email, this.senha, this.nome, this.sobrenome)
    }else{
      alert('diferentes porra')
    }
    
  }

  ngOnInit() {
  }

}
