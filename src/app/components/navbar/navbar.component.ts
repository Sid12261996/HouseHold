import {Component, OnInit} from '@angular/core';
import {PopUpService} from 'src/app/services/pop-up.service';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {RegisterComponent} from '../header/register/register.component';
import {LoginComponent} from '../header/login/login.component';
import {UserService} from '../../services/user-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  ngOnInit() {
  }

  constructor(private dialog: MatDialog,
              private dialog2: MatDialog,
              private userService: UserService
  ) {
  }

  RegisterPopUp() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = '300%';
    // dialogConfig.height = "900px";
    this.dialog.open(RegisterComponent);

  }

  LoginPopUp() {
    const dialogConfig2 = new MatDialogConfig();
    dialogConfig2.width = '300%';
    this.dialog2.open(LoginComponent);

  }

  UserIn(): boolean {
    return this.userService.AmIAuthenticated;

  }
  Logout():void{
    this.userService.Logout();
  }
}

