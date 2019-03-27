import { LoginComponent } from './login/login.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import { RegisterComponent } from './register/register.component';
import { PopUpService } from 'src/app/pop-up.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  
  ngOnInit() {
  }
  constructor(private dialog:MatDialog,
              private dialog2:MatDialog,
              private popUps:PopUpService          
    ){}

    RegisterPopUp(){
   this.popUps.openDialog();
  }
  LoginPopUp(){
    this.popUps.openDialog2();
  }
}
