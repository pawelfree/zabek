import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupData = { username: '', email: '', password: '', confirmPassword: '' };
  message = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {}

  signup() {
    this.http
      .post(
        '/api/users',
        _.pick(this.signupData, ['username', 'email', 'password'])
      )
      .subscribe(
        resp => {
          this.router.navigate(['/']);
        },
        err => {
          this.message = err.error;
        }
      );
  }
}
