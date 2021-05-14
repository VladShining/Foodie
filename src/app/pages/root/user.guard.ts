import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserRegisterService } from './user/user.register.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate
{

  constructor(public user: UserRegisterService)
  {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    return this.user.getCurrentUserExist();
  }

}
