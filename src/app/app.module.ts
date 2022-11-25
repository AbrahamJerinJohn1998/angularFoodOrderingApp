import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArabianComponent } from './arabian/arabian.component';
import { ChineseComponent } from './chinese/chinese.component';
import { NorthIndianComponent } from './north-indian/north-indian.component';

@NgModule({
  declarations: [
    AppComponent,
    ArabianComponent,
    ChineseComponent,
    NorthIndianComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
