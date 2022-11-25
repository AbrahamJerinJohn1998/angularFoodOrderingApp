import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArabianComponent } from './arabian/arabian.component';
import { ChineseComponent } from './chinese/chinese.component';
import { NorthIndianComponent } from './north-indian/north-indian.component';
import { SouthIndianComponent } from './south-indian/south-indian.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
const myRoute:Routes=[
  {
    path:"",
    component:ArabianComponent
  },
  {
    path:"chinese",
    component:ChineseComponent
  },
  {
    path:"northindian",
    component:NorthIndianComponent
  },
  {
    path:"southindian",
    component:SouthIndianComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ArabianComponent,
    ChineseComponent,
    NorthIndianComponent,
    SouthIndianComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
