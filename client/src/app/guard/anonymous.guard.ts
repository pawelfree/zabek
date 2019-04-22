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
export class AnonymousGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.checkLogin();
  }

  checkLogin(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.userService
        .isLoggedIn()
        .then(() => {
          this.router.navigate(['/dashboard']);
          reject(false);
        })
        .catch(() => {
          resolve(true);
        });
    });
  }
}
