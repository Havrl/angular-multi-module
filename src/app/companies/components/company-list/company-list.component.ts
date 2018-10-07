import { Company } from './../../../shared/models/company.model';
import { DataService } from './../../../core/services/data.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-company-list',
  template: `
  <h2>Companies</h2>
  <app-add-company></app-add-company>
  <br />
  <table class="table">
    <thead>
        <tr>
            <th></th>
            <th>Company</th>
            <th>Integraions</th>
            <th>People</th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let item of (companiesState | async).companies">
            <td></td>
            <td><a href="javascript:;" routerLink="/companies/{{item.id}}/settings">settings</a>
            | <a href="javascript:;" routerLink="/files/{{item.id}}">files</a></td>
            <td>{{ item.title}}</td>
            <td>{{ item.userId }}</td>
        </tr>
    </tbody>
    </table>
  `,
  styles: []
})
export class CompanyListComponent implements OnInit {

    companiesState: Observable<{ companies: Company[]}>;

  constructor(private dataService: DataService,
    private store: Store<{companies: {companies: Company[]}}>) { }

  ngOnInit() {

    this.companiesState = this.store.select('companies');

    /* this.dataService.getCompanyList().subscribe(
        data => this.companies = data
    ); */

  }

}
