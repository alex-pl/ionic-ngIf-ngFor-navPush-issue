import { Component } from '@angular/core';
import { AnotherPage } from './another-page';

@Component({
  templateUrl: 'page.html'
})
export class Page {

  public anotherPage = AnotherPage;

  public enabled = false;
  public array = [];

  ionViewDidEnter() {
      this.enabled = true;
      this.array = ['Hey :)', 'Huhu \\o/', 'Hi ;)'];
  }

}
