import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupData = { username: '', password: '', confirmPassword: '' };
  message = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {}

  signup() {
    this.http.post('/auth/signup', this.signupData).subscribe(
      resp => {
        this.router.navigate(['/']);
      },
      err => {
        console.log(err.error);
        this.message = err.error;
      }
    );
  }
}
