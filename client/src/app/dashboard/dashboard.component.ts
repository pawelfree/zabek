import { Component, OnInit } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log('on init');
    this.http.get('http://localhost:3001/api/examination/').subscribe(res => {
      console.log('examination endpoint called - user: ', res);
    });
  }
}
