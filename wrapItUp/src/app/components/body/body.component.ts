import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/user-service.service';
import { AppUser } from 'src/app-user';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private dataService:UserService) { }
user$:AppUser[];
  ngOnInit() {
    this.dataService.GetUserByEmail('sidharthrkc@gmail.com').subscribe(data=>{this.user$=data;
    
    }
      );
  }

}
