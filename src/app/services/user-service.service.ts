import { Injectable } from '@angular/core';

import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';



import { JsonPipe } from '@angular/common';
import { AppUser } from '../models/app-user';


@Injectable({  
  providedIn: 'root'  
}) 
export class UserService {

  constructor(private http : HttpClient ) { }
  private newMethod() {
    return 'root';
  }

 
  currentUser:AppUser;
  
  Url:string = 'https://wraapitup.herokuapp.com/api/';
  //Url:string = 'http://localhost:3000/api/';
  countryApi: string='https://restcountries.eu/rest/v2/all';
headerType={  
  headers: new HttpHeaders({'Content-Type':'application/json' }),
  
}
//To register an user to DB
RegisterUser(user: AppUser): Observable<any>{
  this.currentUser=user;
if(user.Username!=null){
  return this.http.post<AppUser>(
    this.Url+'User/Register',
    user,
    this.headerType
  
  ).pipe(
    
    catchError(this.handleError<AppUser>('RegisterUser'))
  );
}
}
// SetHeaderObj = {headers:{
//   Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.c2lk.4QlpDNQd90mJD4ORLrRiigR9IsuUxlX_yXKyygdDoMo'
// }}
//For getting user on the user with emailId
GetUserByEmail( email:string):Observable<AppUser[]>{

  return this.http.get<AppUser[]>(this.Url+'getall');
}
//For Logging user in and getting back token
LoginUser(user:AppUser):Observable<any>{
    if(user!=null||user != undefined){
        return this.http.post<AppUser>(this.Url+'User/Login',
        {Email:user.Email,Password:user.Password},this.headerType)
        .pipe(
          catchError(this.handleError<AppUser>('RegisterUser'))
        );
    }

}
//For getting Country
public getCountry():Observable<JsonPipe>{
return this.http.get<JsonPipe>(this.countryApi)
;
}


public errorModel:any;
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    this.errorModel=error.error.ModelState;
    // TODO: send the error to remote logging infrastructure
  // log to console instead

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
