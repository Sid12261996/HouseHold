import { Component, OnInit, Output, Input } from '@angular/core';
import { UserService } from 'src/user-service.service';
import { AppUser } from 'src/app-user';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private dataService:UserService ) { }

  ngOnInit(){

} 
user$:AppUser[];
getUser():void{
  var email = this.dataService.currentUser.Email; 
  console.log(email);
  email?email:'sidharthrkc@gmail.com';
  this.dataService.GetUserByEmail(email).
  subscribe(data=>
    {
      this.user$ =data;
      

    })
}
  
}
