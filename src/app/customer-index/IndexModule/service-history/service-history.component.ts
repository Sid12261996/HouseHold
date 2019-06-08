import {Component, OnInit} from '@angular/core';
import {ServiceOfferedService} from '../../../services/service-offered.service';
import {MatTableDataSource} from '@angular/material';
import {ServicesOffered} from '../../../models/services-offered';


@Component({
  selector: 'app-service-history',
  templateUrl: './service-history.component.html',
  styleUrls: ['./service-history.component.css']
})
export class ServiceHistoryComponent implements OnInit {

  constructor(private service: ServiceOfferedService) {
  }

  dataSource = new MatTableDataSource<ServicesOffered>();

  displayedColumns: string[] = ['ServiceName', 'BookingDate', 'DateOfService', 'status', 'action'];
  serviceViewModel: ServicesOffered = new ServicesOffered();

  ngOnInit() {
    this.getServices();
  }

  getServices() {
    this.service.getAllservicesForUser().subscribe(data => {
      data = this.serviceViewModel.mapper(data);
      this.dataSource.data = data;
    });
  }
}
