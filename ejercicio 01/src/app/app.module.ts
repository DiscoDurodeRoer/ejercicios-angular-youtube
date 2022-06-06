import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HolaMundo } from './hola-mundo/hola-mundo.component';

@NgModule({
  declarations: [
    AppComponent,
    HolaMundo
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
