import { take } from 'rxjs/operators';
import { Company } from './../../../shared/models/company.model';
import { DataService } from './../../../core/services/data.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import * as CompanyListActions from '../company-list/company-list.actions';

@Component({
  selector: 'app-add-company',
  template: `
  <form [formGroup]="companyForm" (ngSubmit)="addCompany()" novalidate>
    <input placeholder="title" formControlName="title" type="text" />
    <input placeholder="user id" formControlName="userId" type="text" />
    <button type="submit" >Add</button>
  </form>
  `,
  styles: []
})
export class AddCompanyComponent implements OnInit {

  companyForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<{companies: {companies: Company[]}}>) { }

  ngOnInit() {

    this.companyForm = this.fb.group({
      'title': new FormControl(),
      'userId': new FormControl()
    });
  }

  addCompany() {
    const values = this.companyForm.value;
    const newCompany = <Company>{
      id: 3,
      title: values.title,
      userId: values.userId
    };

    console.log('save company', newCompany);
    this.store.dispatch(new CompanyListActions.AddCompany(newCompany));
  }

}
