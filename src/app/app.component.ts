import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import {Plugins, Capacitor} from '@capacitor/core'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Estoque',
      url: '/estoque',
      icon: 'clipboard'
    }
  ];

  constructor(
    private platform: Platform,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if(Capacitor.isPluginAvailable('SpashScreen')){
        Plugins.SplashScreen.hide();
      }
    })
  }
}
