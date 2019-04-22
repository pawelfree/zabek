import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

interface Token {
  token: string;
}

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {
  title = 'Ząbek RTG';
  signinData = { email: '', password: '' };
  message = '';

  //@ViewChild('loginModal') loginModal: ModalComponent;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {}

  signIn() {
    this.http.post<Token>('/api/auth', this.signinData).subscribe(
      resp => {
        localStorage.setItem('x-auth-token', resp.token);
        this.router.navigate(['/dashboard']);
      },
      (err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
        this.message = err.error;
      }
    );
  }
}
