import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityService } from '../services/security.service';
import { PopUpService } from '../services/pop-up.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  /**
   *
   */
  constructor(private securityService:SecurityService,private router:Router,private popup:PopUpService) {
   
    

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     
      if(this.securityService.isauthenticated()){
        return true;
      }
      this.popup.openDialog2();
      this.router.navigate(['/'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
