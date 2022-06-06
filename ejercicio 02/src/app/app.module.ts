import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MostrarOcultar} from './mostrar-ocultar/mostrar-ocultar.component';

@NgModule({
  declarations: [
    AppComponent,
    MostrarOcultar
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
