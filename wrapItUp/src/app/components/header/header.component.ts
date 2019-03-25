import { LoginComponent } from './login/login.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  
  ngOnInit() {
  }
  constructor(private dialog:MatDialog,
              private dialog2:MatDialog          
    ){}

  openDialog(){
    const dialogConfig = new MatDialogConfig();
   
    dialogConfig.width = "300%";
    //dialogConfig.height = "900px";
    this.dialog.open(RegisterComponent)
  }
  openDialog2(){
    const dialogConfig2 = new MatDialogConfig();
    dialogConfig2.disableClose = true;
    this.dialog2.open(LoginComponent)
  }
}
