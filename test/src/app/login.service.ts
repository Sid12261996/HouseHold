import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

import { FormGroup } from '@angular/forms';
@Injectable()
export class LoginService {

  constructor(private http : HttpClient ) { }
RegisterUser(user: FormGroup){
if(user.value!=null){
  this.http.post(
    'http://localhost:52035/Api/Account/Register',
    user,
    {
      headers: new HttpHeaders({'Content-Type':'application/json' })
    }
  )
}

}

}
