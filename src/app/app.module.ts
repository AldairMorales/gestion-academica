import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // Import for animations

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from "./login/login.component";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LoginComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
