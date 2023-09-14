import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

//Necesario para locale (idiomas) en datePipe
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeEs);
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, //necesario para usar algunos componentes de PrimeNG ( npm i @angular/animations --save )
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    //Cambiar idioma general de la aplicación (cambiamos inglés por español)
    //{ provide: LOCALE_ID, useValue:'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
