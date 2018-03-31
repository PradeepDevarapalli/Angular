import { Component } from '@angular/core';
import {UserData} from "./UserData/UserData";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user;
  constructor(userData:UserData)
  {
    this.user=userData.getUsers();
  }

}
