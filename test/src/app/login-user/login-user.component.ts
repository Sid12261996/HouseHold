import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  formFields:FormGroup;

  constructor() { }

  ngOnInit() {
    this.formFields = new FormGroup({
      
      Email :new FormControl(),
      Password :new FormControl()
      
    });
  }
  Register():void{
    console.log(this.formFields.value);
  }

}
