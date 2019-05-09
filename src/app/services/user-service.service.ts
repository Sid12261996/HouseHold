import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap, map} from 'rxjs/operators';


import {JsonPipe} from '@angular/common';
import {AppUser} from '../models/app-user';
import {SecurityService} from './security.service';
import {AppUserWithAuth} from '../models/app-user-with-auth';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private security: SecurityService) {
  }
  private currentUser: AppUser;
  get CurrentUser() {
    return this.security.SecurityObject.user;
  }

  get SecurityService() {
    return this.security.SecurityObject;
  }




  Url = 'https://householdapi.herokuapp.com/api/';
  // Url:string = 'http://localhost:3000/api/';
  countryApi = 'https://restcountries.eu/rest/v2/all';
  headerType = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),

  };


  public errorModel: any;

// To register an user to DB
  RegisterUser(user: AppUser): Observable<any> {

    if (user.Username != null) {
      return this.http.post<AppUser>(
        this.Url + 'User/Register',
        user,
        this.headerType
      ).pipe(
        catchError(this.handleError<AppUser>('RegisterUser'))
      );
    }
  }

// For getting user on the user with emailId
  GetUserByEmail(email: string): Observable<AppUser[]> {

    return this.http.get<AppUser[]>(this.Url + 'getall');
  }

// For Logging user in and getting back token

  LoginUser(user: AppUser): Observable<any> {

    if (user != null || user !== undefined) {
      return this.http.post<AppUser>(this.Url + 'User/Login',
        {Email: user.Email, Password: user.Password})
        .pipe(
          catchError(this.handleError<AppUser>('RegisterUser'))
        );
    }

  }


  Logout(): void {
    this.security.logOut();

  }

  User(user: AppUserWithAuth) {
   // console.log(user, 'I am from role');
    switch (user.user.Role) {
      case 'Admin':
        this.Admin(user);
        break;
      case 'Worker':
        this.Worker(user);
        break;
      case 'Customer':
        this.Customer(user);
        break;

    }

  }

 get AmIAuthenticated(): boolean {
    if (this.security.isauthenticated()) {
      return true;
    }
    return false;
  }

  private Worker(user: AppUserWithAuth) {
    // tslint:disable-next-line:no-unused-expression
    this.security.SetWorker(user);
  }

  private Customer(user: AppUserWithAuth) {
    // tslint:disable-next-line:no-unused-expression
    this.security.SetCustomer(user);
  }

  private Admin(user: AppUserWithAuth) {
    // tslint:disable-next-line:no-unused-expression
    this.security.SetAdmin(user);
  }

// For getting Country
  public getCountry(): Observable<JsonPipe> {
    return this.http.get<JsonPipe>(this.countryApi)
      ;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.errorModel = error.error.ModelState;
      // TODO: send the error to remote logging infrastructure
      // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
