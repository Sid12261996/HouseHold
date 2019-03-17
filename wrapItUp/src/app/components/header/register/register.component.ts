import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/user-service.service';
import { Router } from '@angular/router';
import { AppUser } from 'src/app-user';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],  
})
export class RegisterComponent implements OnInit {
  register = "THis is REgisters";
  formFields:FormGroup;

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
 public country:object;
Country():void{
  this._loginservice.getCountry().subscribe(data=>{
    this.country= data;
    console.log(data);
    
  })
 
}

user$ : AppUser[];
users():void{

  this._loginservice.GetUserByEmail('sidharthrkc@gmail.com').subscribe(data=>{this.user$=data})
}
}