import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioHijoComponent } from './formulario-hijo/formulario-hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioHijoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Se importa FormsModule
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
