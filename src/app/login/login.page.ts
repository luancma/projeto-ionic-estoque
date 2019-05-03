import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router'
import * as firebase from 'firebase'
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  email: string = "";
  password: string = "";
  constructor( 
    private loginService : AuthService, 
    private router: Router,
    private alertController: AlertController ) { }
    
    btnCriarUsuario = () =>{
      this.router.navigateByUrl('criar-usuario')
    }
    btnLogar (){   
      this.loginService.login(this.email, this.password)
    }
    
    ngOnInit() {
    }
    
  }
  