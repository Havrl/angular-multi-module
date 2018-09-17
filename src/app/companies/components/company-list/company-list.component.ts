import { DataService } from './../../../core/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-list',
  template: `
  <h2>Companies</h2>
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
        <tr *ngFor="let item of companies">
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

    companies = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getCompanyList().subscribe(
        data => this.companies = data
    );

  }

}
