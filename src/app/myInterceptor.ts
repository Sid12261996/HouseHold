import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserService} from './services/user-service.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private userservice: UserService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const currentUser = localStorage.getItem(this.userservice.CurrentUser.Email);
    // console.log(currentUser);
    if (currentUser) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser}`
        }
      });

    }

    return next.handle(request);
  }
}
