import { Injectable } from '@angular/core';

import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import {AppUser} from './app-user'

@Injectable({  
  providedIn: 'root'  
}) 
export class UserService {

  constructor(private http : HttpClient ) { }
  private newMethod() {
    return 'root';
  }

RegisterUser(user: AppUser): Observable<AppUser>{
if(user.Username!=null){
  return this.http.post<AppUser>(
    'http://localhost:52035/Api/Account/Register',
    user,
    {
      headers: new HttpHeaders({'Content-Type':'application/json' })
    }
  ).pipe(
    tap((user:AppUser) => console.log(`added User w/ id=${user.Username}`)),
    catchError(this.handleError<AppUser>('RegisterUser'))
  );
}

}

 
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
