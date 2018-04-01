import { Component} from '@angular/core';
import {UserData} from "../UserData/UserData";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  states = ['IL','AR','NY','TN','TX'];
  user={
    firstName:null,
    lastName:null,
    email:null,
    address:{
      state:null
    }

  };
  constructor(private userData:UserData)
  {

  }
  addUser()
  {
  this.userData.addUser(this.user);
  }

}
