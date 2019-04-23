import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/user-service.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.formFields = new FormGroup({
   
      Email :new FormControl(),
      Password :new FormControl()})
  }
  formFields:FormGroup;

  Login(){
    this.userService.LoginUser(this.formFields.value).subscribe(data=>{
      console.log(data)
      
    })
  }

}
