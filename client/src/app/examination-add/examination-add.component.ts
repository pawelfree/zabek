import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-examination-add',
  templateUrl: './examination-add.component.html',
  styleUrls: ['./examination-add.component.scss']
})
export class ExaminationAddComponent implements OnInit {

  examinationForm: FormGroup;
  prod_name:string='';
  prod_desc:string='';
  prod_price:number=null;
  updated_at:Date=null;
  isLoadingResults = false;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.examinationForm = this.formBuilder.group({
   'prod_name' : [null, Validators.required],
   'prod_desc' : [null, Validators.required],
   'prod_price' : [null, Validators.required]
   //,   'updated_at' : [null, Validators.required]
    });
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.api.addExamination(form)
      .subscribe(res => {
          let id = res['_id'];
          this.isLoadingResults = false;
          this.router.navigate(['/examination-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }
}
