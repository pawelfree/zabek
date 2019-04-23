import { Component, OnInit } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user;
  constructor(private http: HttpClient, private userService: UserService) {}

  ngOnInit() {}

  logout() {
    this.userService.logout();
  }

  getExaminations() {
    this.http.get('/api/examination/').subscribe(
      res => {
        this.user = res;
      },
      err => {
        this.user = '';
      }
    );
  }
}
