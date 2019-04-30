import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor() { }
  
  login(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  logout(){
    return firebase.auth().signOut();
  }
  
  getAuth() {
    return firebase.auth();
  }
  
  
}
