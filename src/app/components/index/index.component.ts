import { Component, OnInit, Output, Input } from '@angular/core';
import { UserService } from 'src/app/services/user-service.service';
import { AppUser } from 'src/app/models/app-user';
import { SecurityService } from 'src/app/services/security.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private security:SecurityService,private dataService:UserService ) { }

  ngOnInit(){

} 
user$:AppUser[];
getUser():void{
  var email = this.security.SecurityObject.Token; 
  console.log(email);
  email?email:'sidharthrkc@gmail.com';
  this.dataService.GetUserByEmail(email).
  subscribe(data=>
    {
      this.user$ =data;
      

    })
}
  
}
