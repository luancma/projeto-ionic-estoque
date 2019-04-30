import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import * as firebase from 'firebase';
import { CadastrarProdutoPageModule } from './cadastrar-produto/cadastrar-produto.module';

const config = {
  apiKey: "AIzaSyDJAUBqZJgLhRBeHjUBnBVfhTY8aXc7VU4",
  authDomain: "projeto-ingles-5262b.firebaseapp.com",
  databaseURL: "https://projeto-ingles-5262b.firebaseio.com",
  projectId: "projeto-ingles-5262b",
  storageBucket: "projeto-ingles-5262b.appspot.com",
  messagingSenderId: "283452846843"
};

firebase.initializeApp(config);
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CadastrarProdutoPageModule 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
