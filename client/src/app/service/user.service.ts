import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  logout() {
    localStorage.removeItem('x-auth-token');
  }

  isLoggedIn() {
    return new Promise((resolve, reject) => {
      this.getCurrentUser()
        .then(user => {
          resolve(true);
        })
        .catch(() => {
          reject(false);
        });
    });
  }

  getCurrentUser() {
    return new Promise((resolve, reject) => {
      return this.http
        .get('/api/users/me')
        .toPromise()
        .then(response => {
          resolve(response);
        })
        .catch(() => {
          reject();
        });
    });
  }
}
