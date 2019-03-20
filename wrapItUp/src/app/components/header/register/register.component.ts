import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/user-service.service';
import { Router } from '@angular/router';
import { AppUser } from 'src/app-user';
import { FormGroup, FormControl } from '@angular/forms';

import { JsonPipe } from '@angular/common';
import { CountryService } from 'src/app/country.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],  
})
export class RegisterComponent implements OnInit {
  register = "THis is REgisters";
  formFields:FormGroup;
 


 
 constructor(private _loginservice : UserService, private route:Router,private countryService:CountryService) { }

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
 public country$:string[];
 state$:string[];
 Country():void{
  this.country$= this.countryService.getCountry();
    
   

}
States: string[];


state():void{
  var SelectedcountryName = this.formFields.value.Country;
  if(SelectedcountryName!=null&&SelectedcountryName!= undefined)
  {
       
        var AllState=this.countryService.getState();
        var index=this.country$.indexOf(SelectedcountryName);
        var states=AllState[index+1].split("|");
        this.States= states;
  }
}

user$ :AppUser[];
getUser():void{
   this._loginservice.GetUserByEmail(this.formFields.value.Email).subscribe(data=>{this.user$ = data});
}
  

}