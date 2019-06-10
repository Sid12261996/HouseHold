import {ServiceTypes} from './service-types.enum';
import {UserService} from '../services/user-service.service';

export class ServicesOffered {
  _id: string;
  ServiceName: string;
  BookingDate: string;
  DateOfService: string;
  userId: string;
  serviceType: ServiceTypes;
  isCompleted: Boolean;
  status: string;
  charges: Number;

  mapper(data: ServicesOffered[]): ServicesOffered[] {
    for (const element of data) {
      element.DateOfService = new Date(element.DateOfService).toDateString();
      element.BookingDate = new Date(element.BookingDate).toDateString();
      if (element.isCompleted) {
        element.status = 'Completed/Cancelled';
      } else {
        element.status = 'Pending';
      }
    }
    return data;
  }


}
