import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-examination-edit',
  templateUrl: './examination-edit.component.html',
  styleUrls: ['./examination-edit.component.scss']
})
export class ExaminationEditComponent implements OnInit {

  examinationForm: FormGroup;
  _id:string='';
  prod_name:string='';
  prod_desc:string='';
  prod_price:number=null;
  isLoadingResults = false;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getExamination(this.route.snapshot.params['id']);
     this.examinationForm = this.formBuilder.group({
       'prod_name' : [null, Validators.required],
       'prod_desc' : [null, Validators.required],
       'prod_price' : [null, Validators.required]
     });
  }

  getExamination(id) {
    this.api.getExamination(id).subscribe(data => {
      this._id = data._id;
      this.examinationForm.setValue({
        prod_name: data.prod_name,
        prod_desc: data.prod_desc,
        prod_price: data.prod_price
      });
    });
  }

  onFormSubmit(form:NgForm) {
  this.isLoadingResults = true;
  this.api.updateExamination(this._id, form)
    .subscribe(res => {
        let id = res['_id'];
        this.isLoadingResults = false;
        this.router.navigate(['/examination-details', id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }

  examinationDetails() {
  this.router.navigate(['/examination-details', this._id]);
  }
}
