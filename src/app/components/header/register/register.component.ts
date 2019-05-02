import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';
import { AppUser } from 'src/app/models/app-user';
import { FormGroup, FormControl } from '@angular/forms';

import { JsonPipe } from '@angular/common';
import { CountryService } from 'src/app/services/country.service';
import { PopUpService } from 'src/app/services/pop-up.service';
import { IndexComponent } from '../../index/index.component';
import { error } from 'util';
import { LoginComponent } from '../login/login.component';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MatDialog, MatDialogConfig } from '@angular/material';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],  
})
export class RegisterComponent implements OnInit {
  register = "THis is REgisters";
  formFields:FormGroup;
 
 constructor(private _loginservice : UserService, private route:Router,private countryService:CountryService,
  private dialog:MatDialog,
    private dialog2:MatDialog) { }

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
this.state();

   
 }
message:string;

///popups
openDialog(){
  const dialogConfig = new MatDialogConfig();
 
  dialogConfig.width = "300%";
  //dialogConfig.height = "900px";
  this.dialog.open(RegisterComponent)
}
openDialog2(){
  const dialogConfig2 = new MatDialogConfig();
  dialogConfig2.width = "300%";
  this.dialog2.open(LoginComponent)
}
closeDialog(){
 this.dialog.closeAll();
}
closeDialog2(){
  this.dialog2.closeAll();
 }


 Register():void{
  
   
    this._loginservice.RegisterUser(this.formFields.value).subscribe( data => {
     
     
     
      
      if(data==null||data==undefined){
        
      }
      if(data.message == 'Successfully Saved'){
        console.log(data.message);
        this.message = data.message;
        this.loginOpen(); 
     
     
      }
      console.log(data.message);
      this.message = data.message;
     
    });
    
  
 }
 public country$:string[];
 state$:string[];
 Country():void{
  this.country$= this.countryService.getCountry();
    
   

}
States: string[];
errorFModel$:any="";

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
  
loginOpen(){
 this.closeDialog();
  this.openDialog2();
  
}

}