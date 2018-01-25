import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { deneme } from "./deneme";

@NgModule({
  declarations: [
    AppComponent,
    deneme
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,deneme]
})
export class AppModule { }
