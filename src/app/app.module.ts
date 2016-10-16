import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page } from '../pages/page/page';
import { AnotherPage } from '../pages/page/another-page';

@NgModule({
  declarations: [
    MyApp,
    Page,
    AnotherPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page,
    AnotherPage
  ],
  providers: []
})
export class AppModule {}
