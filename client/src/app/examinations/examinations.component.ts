import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Examination } from '../examination';

@Component({
  selector: 'app-examinations',
  templateUrl: './examinations.component.html',
  styleUrls: ['./examinations.component.scss']
})
export class ExaminationsComponent implements OnInit {

  displayedColumns: string[] = ['prod_name', 'prod_price'];
  data: Examination[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getExaminations()
   .subscribe(res => {
     this.data = res;
     console.log(this.data);
     this.isLoadingResults = false;
   }, err => {
     console.log(err);
     this.isLoadingResults = false;
   });
  }

}
