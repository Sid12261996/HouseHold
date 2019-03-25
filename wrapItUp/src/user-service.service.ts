import { Injectable } from '@angular/core';

import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import {AppUser} from './app-user'
import { stringify } from 'querystring';
import { JsonPipe } from '@angular/common';

@Injectable({  
  providedIn: 'root'  
}) 
export class UserService {

  constructor(private http : HttpClient ) { }
  private newMethod() {
    return 'root';
  }
  currentUser:AppUser;
  Url:string = 'https://apiforhouseholdrapitup20190308031732.azurewebsites.net/Api/';
  urlloC:string = 'http://localhost:52035/Api/';
  countryApi: string='https://restcountries.eu/rest/v2/all';


RegisterUser(user: AppUser): Observable<AppUser>{
  this.currentUser=user;
if(user.Username!=null){
  return this.http.post<AppUser>(
    this.urlloC+'Account/Register',
    user,
    {
      headers: new HttpHeaders({'Content-Type':'application/json' })
    }
  ).pipe(
    
    catchError(this.handleError<AppUser>('RegisterUser'))
  );
}
}

GetUserByEmail( email:string):Observable<AppUser[]>{

  return this.http.get<AppUser[]>(this.urlloC+'Account/GetUserByEmail?Email='+email);
}

public getCountry():Observable<JsonPipe>{
return this.http.get<JsonPipe>(this.countryApi)
;
}

 errorModel:object;
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    this.errorModel=error;
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
