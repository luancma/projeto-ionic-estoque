import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(
    private alertController: AlertController,
    private router : Router
    ) { }
    
    async presentAlert(erro) {
      const alert = await this.alertController.create({
        header: 'Erro!',
        message: erro,
        buttons: ['OK']
      });
      await alert.present();
    }
    
    login(email: string, password: string) {
      return firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        if(error.code === 'auth/invalid-email'){
          this.presentAlert('Email não cadastrado')
        }
        else if(error.code === 'auth/user-disabled'){
          this.presentAlert('Email desabilitado')
        }
        else if(error.code === 'auth/user-not-found'){
          this.presentAlert('Email ou senha não são válidos')
        }
        else if(error.code === 'auth/wrong-password'){
          this.presentAlert('Email ou senha não são válidos')
        }
      })
    }
    
    createUser(email: string, password: string, nome: string, sobrenome: string){
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase.auth().currentUser.updateProfile({
          displayName: nome,
          photoURL: '',
        }).then(() => {
          firebase.database().ref(`/usuarios/${firebase.auth().currentUser.uid}`).set({
            uid: firebase.auth().currentUser.uid,
            displayName: nome,
            sobrenome: sobrenome,
            email: email
          }).then(() =>{
            this.router.navigateByUrl('login')
          }).catch(() => {
            console.log('erro 1');
          })
        }).catch(() => {
          console.log('erro 2')
        })
      }).catch(error => {
        if(error.code === 'auth/email-already-in-use'){
          this.presentAlert('Email já cadastrado')
        }
        else if(error.code === 'auth/invalid-email'){
          this.presentAlert('Email inválido')
        }
        else if(error.code === 'auth/operation-not-allowed'){
          this.presentAlert('Você não tem permissões para essa ação')
        }
        else if(error.code === 'auth/weak-password'){
          this.presentAlert('Senha fraca!')
        }
      })
      
    }
    
    
    logout(){
      return firebase.auth().signOut();
    }
    
    getAuth() {
      return firebase.auth();
    }
    
    
  }
  