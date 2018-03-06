import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { deneme } from "./deneme";
import { PersonService } from './PersonService';

@NgModule({
  declarations: [
    AppComponent,
    deneme
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
