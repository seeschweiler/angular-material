import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'hammerjs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MdInputModule, MdButtonModule } from '@angular/material';


import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MdInputModule,
    MdButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
