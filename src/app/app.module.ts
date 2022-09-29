import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaComponent } from './component/lista/lista.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { TablaComponent } from './component/tabla/tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    NavbarComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
