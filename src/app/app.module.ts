import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AssetsComponent } from '../assets/assets.component';


// configuracion de local de la app
import localeEsCo from "@angular/common/locales/es-CO";
import localeRuBy from "@angular/common/locales/ru-BY";

import {registerLocaleData} from "@angular/common";


registerLocaleData ( localeEsCo);
registerLocaleData ( localeRuBy);


@NgModule({
  declarations: [
    AppComponent,
    AssetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,

  ],
  providers: [
    provideClientHydration(),
    {provide: LOCALE_ID, useValue: 'es-CO'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
