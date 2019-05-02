import { Injectable } from '@angular/core';
import { Auth } from '../Security/auth';
import { AppUser } from '../models/app-user';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
SecurityObject:Auth= new Auth();
  constructor() {
    this.SecurityObject.isAuthenticated=false;
    this.SecurityObject.isCustomer=false;
    this.SecurityObject.isWorker=false;
    this.SecurityObject.isAdmin=false;
   }
  isauthenticated():Boolean{
  if(this.SecurityObject.isAuthenticated==true)
  return true;
  else return false;
}

setToken(user:any):void{
  if(user&&user.token){
localStorage.setItem('Token',user.token);
  }
}
  ResetUser(){
    this.SecurityObject.isAuthenticated=false;
    this.SecurityObject.isCustomer=false;
    this.SecurityObject.isWorker=false;
    this.SecurityObject.isAdmin=false;


  }
  logOut(){
    this.ResetUser();
  }

  SetWorker(){
    this.ResetUser();
    this.SecurityObject.isAuthenticated=true;
    this.SecurityObject.isCustomer=false;
    this.SecurityObject.isWorker=true;
    this.SecurityObject.isAdmin=false;
  }

  SetCustomer(){
    this.ResetUser();
    this.SecurityObject.isAuthenticated=true;
    this.SecurityObject.isCustomer=true;
    this.SecurityObject.isWorker=false;
    this.SecurityObject.isAdmin=false;
  }

  SetAdmin(){
    this.ResetUser();
     this.SecurityObject.isAuthenticated=true;
    this.SecurityObject.isCustomer=true;
    this.SecurityObject.isWorker=true;
    this.SecurityObject.isAdmin=true;
  }
}
