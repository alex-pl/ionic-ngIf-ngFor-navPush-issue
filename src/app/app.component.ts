import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';

import { StatusBar } from 'ionic-native';

import { Page } from '../pages/page/page';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any = Page;

  constructor(
    public platform: Platform
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

}
