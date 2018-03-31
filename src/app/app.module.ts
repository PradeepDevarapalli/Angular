import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {UserData} from './user-data/user-data.component';


@NgModule({
  declarations: [
    AppComponent,
    UserData
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserData],
  bootstrap: [AppComponent]
})
export class AppModule { }
