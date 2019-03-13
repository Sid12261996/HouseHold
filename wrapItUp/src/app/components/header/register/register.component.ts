import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/user-service.service';
import { AppUser } from 'src/app-user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],  
})
export class RegisterComponent implements OnInit {
  formFields: any;
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