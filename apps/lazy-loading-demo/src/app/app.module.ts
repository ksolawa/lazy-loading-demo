import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CatGeneratorComponent} from './cats/cat-generator.component';

@NgModule({
  declarations: [AppComponent, CatGeneratorComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
