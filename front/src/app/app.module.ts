import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChambresComponent } from './chambres/chambres.component';
import { ChoixComponent } from './choix/choix.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChambresComponent,
    ChoixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
