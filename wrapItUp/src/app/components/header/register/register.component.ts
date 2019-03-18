import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/user-service.service';
import { Router } from '@angular/router';
import { AppUser } from 'src/app-user';
import { FormGroup, FormControl } from '@angular/forms';

import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],  
})
export class RegisterComponent implements OnInit {
  register = "THis is REgisters";
  formFields:FormGroup;
   Email:string;


 
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

   this.Country();
   
   
 }
 registered:boolean = false;
 Register():void{
   console.log(this._loginservice.errorModel);
   
    this._loginservice.RegisterUser(this.formFields.value).subscribe( data => {
      console.log(data);
      if(data){this.registered = true}
      this.route.navigate(['index'])
    });
 
   
 }
 public country$:JsonPipe;
 state$:JsonPipe[];
 Country():void{
  this._loginservice.getCountry().subscribe(data=>{
    this.country$= data;
   
    
  })
 
}
state():void{
this._loginservice.getCountry().subscribe(
  data=>{}
);

}

user$ :AppUser[];
getUser():void{
   this._loginservice.GetUserByEmail(this.formFields.value.Email).subscribe(data=>{this.user$ = data});
}
  

}