import { Component, OnInit } from '@angular/core';
import { PopUpService } from 'src/app/services/pop-up.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


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
