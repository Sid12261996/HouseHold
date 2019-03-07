import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

   register = "THis is REgisters";
   formFields:FormGroup;

  constructor(private _loginservice : LoginService) { }

  ngOnInit() {
    this.formFields = new FormGroup({
      Username :new FormControl(),
      Email :new FormControl(),
      Password :new FormControl(),
      PhoneNumber :new FormControl(),
      Address :new FormControl(),
      Country :new FormControl(),
      State :new FormControl()

    });
  }
  Register():void{
    console.log(this.formFields.value);
    
    var result = this._loginservice.RegisterUser(this.formFields);
    console.log(result);
    
  }

}
