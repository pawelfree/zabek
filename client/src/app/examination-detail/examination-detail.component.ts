
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Examination } from '../examination';

@Component({
  selector: 'app-examination-detail',
  templateUrl: './examination-detail.component.html',
  styleUrls: ['./examination-detail.component.scss']
})

export class ExaminationDetailComponent implements OnInit {

  examination: Examination = { _id: '', prod_name: '', prod_desc: '', prod_price: null, updated_at: null };
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getExaminationDetails(this.route.snapshot.params['id']);
  }

  getExaminationDetails(id) {
    this.api.getExamination(id)
      .subscribe(data => {
        this.examination = data;
        console.log(this.examination);
        this.isLoadingResults = false;
      });
  }

  deleteExamination(id) {
  this.isLoadingResults = true;
  this.api.deleteExamination(id)
    .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/examinations']);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
}
