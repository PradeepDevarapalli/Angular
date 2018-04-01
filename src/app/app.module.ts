import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";


import { AppComponent } from './app.component';
import {UserData} from "./UserData/UserData";
import { UserFormComponent } from './user-form/user-form.component';



@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UserData],
  bootstrap: [AppComponent]
})
export class AppModule { }
