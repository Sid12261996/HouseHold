import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user-service.service';
import {AppUser} from "../../../models/app-user";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private user: UserService) {
  }
  edit:boolean = false;
  user$: AppUser;

  ngOnInit() {
    this.user$ = this.user.CurrentUser;
  }
  Edit(){

  }
}
