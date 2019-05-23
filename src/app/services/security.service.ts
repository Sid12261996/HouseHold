import {Injectable} from '@angular/core';
import {Auth} from '../Security/auth';
import {AppUser} from '../models/app-user';
import {AppUserWithAuth} from '../models/app-user-with-auth';
import {userError} from '@angular/compiler-cli/src/transformers/util';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  SecurityObject: Auth = new Auth();

  constructor() {
    this.SecurityObject.isAuthenticated = false;
    this.SecurityObject.isCustomer = false;
    this.SecurityObject.isWorker = false;
    this.SecurityObject.isAdmin = false;


  }

  isauthenticated(): Boolean {
    // const userExist = localStorage.getItem(this.SecurityObject.user.Email);
    if (this.SecurityObject.isAuthenticated) {
      return true;
    } else {
      return false;
    }
  }

  setToken(): void {
    if (this.SecurityObject !== null || this.SecurityObject !== undefined) {

      localStorage.setItem('User', JSON.stringify(this.SecurityObject.user));
      localStorage.setItem('Token', this.SecurityObject.Token);
    }
  }

  ResetUser() {
    this.SecurityObject.isAuthenticated = false;
    this.SecurityObject.isCustomer = false;
    this.SecurityObject.isWorker = false;
    this.SecurityObject.isAdmin = false;


  }

  logOut() {
    this.ResetUser();
    this.removeToken(this.SecurityObject.user.Email);
  }

  SetWorker(user: AppUserWithAuth) {
    this.ResetUser();
    this.SecurityObject.isAuthenticated = true;
    this.SecurityObject.isWorker = true;
    this.SecurityObject.user = user.user;
    this.SecurityObject.Token = user.token;
    this.setToken();
  }

  SetCustomer(user: AppUserWithAuth) {
    this.ResetUser();
    this.SecurityObject.isAuthenticated = true;
    this.SecurityObject.isCustomer = true;
    this.SecurityObject.user = user.user;
    this.SecurityObject.Token = user.token;
    this.setToken();
  }

  SetAdmin(user: AppUserWithAuth) {
    this.ResetUser();
    this.SecurityObject.isAuthenticated = true;
    this.SecurityObject.isCustomer = true;
    this.SecurityObject.isWorker = true;
    this.SecurityObject.isAdmin = true;
    this.SecurityObject.user = user.user;
    this.SecurityObject.Token = user.token;
    this.setToken();
  }

  private removeToken(Email: string) {
    localStorage.clear();
  }

  get User() {
    return this.SecurityObject.user;
  }
}
