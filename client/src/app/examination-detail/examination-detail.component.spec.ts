import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationDetailComponent } from './examination-detail.component';

describe('ExaminationDetailComponent', () => {
  let component: ExaminationDetailComponent;
  let fixture: ComponentFixture<ExaminationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExaminationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
