import {Injectable} from '@angular/core';
import {Auth} from '../Security/auth';
import {AppUser} from '../models/app-user';
import {AppUserWithAuth} from '../models/app-user-with-auth';

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
    if (this.SecurityObject.isAuthenticated === true) {
      return true;
    } else {
      return false;
    }
  }

  setToken(): void {
    if (this.SecurityObject !== null || this.SecurityObject !== undefined) {

      localStorage.setItem(this.SecurityObject.user.Email, this.SecurityObject.Token);
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
    localStorage.removeItem(Email);
  }

  get User() {
    return this.SecurityObject.user;
  }
}
