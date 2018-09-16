import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-list',
  template: `
  <h2>Companies</h2>
  <table>
    <thead>
        <tr>
            <th></th>
            <th>Company</th>
            <th>Integraions</th>
            <th>People</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a href="javascript:;" routerLink="/settings/1">Settings</a></td>
            <td>Company 1</td>
            <td>Not connected</td>
            <td><a href="">1</a></td>
        </tr>
        <tr>
            <td><a href="javascript:;" routerLink="/settings/2">Settings</a></td>
            <td>Company 2</td>
            <td>Not connected</td>
            <td><a href="">3</a></td>
        </tr>
    </tbody>
    </table>
  `,
  styles: ['table { width: 100% }']
})
export class CompanyListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
