import { Injectable } from '@angular/core';
import { UserService } from '../service/user.service';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const x = this.checkLogin();
    console.log('authguard can activate: ', x);
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
      //     resolve(true);
      //   })
      //   .catch(() => {
      //     this.router.navigate(['/']);
      //     reject(false);
      //   });
    });
  }
}
