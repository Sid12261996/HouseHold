import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AppUser } from '../app-user';
import { UserService } from '../user.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  register = "THis is REgisters";
  formFields:FormGroup;
User: AppUser[];
 constructor(private _loginservice : UserService, private route:Router) { }

 ngOnInit() {
   this.formFields = new FormGroup({
     Username :new FormControl(),
     Email :new FormControl(),
     Password :new FormControl(),
 
 ConfirmPassword :new FormControl(),
     
     PhoneNumber :new FormControl(),
     Address :new FormControl(),
     Country :new FormControl(),
     State :new FormControl()

   });
   
 }
 Register():void{
   console.log(this.formFields.value);
   
    this._loginservice.RegisterUser(this.formFields.value).subscribe( data => {
      console.log(data);
      
      this.route.navigate(['log-in'])
    });
 
   
 }



}
