import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@portinari/portinari-ui';
import { RouterModule } from '@angular/router';
import { PainelChamadasPageComponent } from './painel-chamadas-page/painel-chamadas-page.component';
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(localeBr, 'pt')

@NgModule({
  declarations: [
    AppComponent,
    PainelChamadasPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([]),
    MatButtonModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatButtonModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
