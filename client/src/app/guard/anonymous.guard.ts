import { Injectable } from '@angular/core';
import { UserService } from '../service/user.service';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { collectExternalReferences } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AnonymousGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const x = this.checkLogin();
    console.log('anonymousguard can activate: ', x);
    return x;
  }

  checkLogin(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (this.userService.isLoggedIn()) {
        resolve(true);
      } else {
        resolve(false);
      }
      // this.userService
      //   .isLoggedIn()
      //   .then(() => {
      //     this.router.navigate(['/dashboard']);
      //     reject(false);
      //   })
      //   .catch(() => {
      //     resolve(true);
      //   });
    });
  }
}
