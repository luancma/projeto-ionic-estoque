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
  apiKey: "AIzaSyBUG462z0nzt1dtYtyQHoVTI4Dtgo7044I",
  authDomain: "projeto-estoque-986b6.firebaseapp.com",
  databaseURL: "https://projeto-estoque-986b6.firebaseio.com",
  projectId: "projeto-estoque-986b6",
  storageBucket: "projeto-estoque-986b6.appspot.com",
  messagingSenderId: "226612387870"
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
