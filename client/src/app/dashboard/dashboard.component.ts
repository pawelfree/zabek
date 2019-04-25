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
  examinations;
  state = { file: null };

  constructor(private http: HttpClient, private userService: UserService) {}

  ngOnInit() {}

  logout() {
    this.userService.logout();
  }

  getLink(event) {
    this.state = { file: event.target.files };
    console.log(this.state);
  }

  getExaminations() {
    this.http.get('/api/examination/').subscribe(
      res => {
        this.examinations = JSON.stringify(res);
      },
      err => {
        this.examinations = '';
      }
    );
  }
}
