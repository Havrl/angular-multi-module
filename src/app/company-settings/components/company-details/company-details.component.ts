import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-details',
  template: `
  <h2>Company Settings</h2>
  <p><a href="javascript:;" routerLink="/">Back to list</a></p>
  <p>
      Company Settings works!
    </p>
  `,
  styles: []
})
export class CompanyDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
