import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { firebaseAuth } from 'src/environments/firebase';

@Injectable()
export class UserLoginGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let log;
    setTimeout(() => {
      log = !!firebaseAuth().currentUser;
    }, 200);
    log && this.router.navigate(['users', 'profil']);
    return !log;
  }
}
