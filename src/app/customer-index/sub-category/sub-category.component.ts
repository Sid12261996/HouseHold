import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ServicesOffered} from "../../models/services-offered";
import {UserService} from "../../services/user-service.service";
import {ServiceOfferedService} from "../../services/service-offered.service";

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {
  formControl: FormGroup;

  constructor(private fB: FormBuilder, private userService: UserService, private serve: ServiceOfferedService) {
  }

  ngOnInit() {
    this.formControl = this.fB.group({
      Address: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      charges: ['', Validators.required],
      DateOfService: ['', Validators.required],
      ServiceName: ['', Validators.required],
    });
  }

  onSubmit() {

    var service = new ServicesOffered();
    service.userId = this.userService.CurrentUser._id;
    var date = this.formControl.value.DateOfService;
    var onlyDate = date.getDate();
    //onlyDate += this.formControl.value.startTime;

    service = {...service, ...this.formControl.value};
    console.log(service, 'onlydate-',onlyDate,'time-',date);
    // this.serve.postServices(service);
  }
}
