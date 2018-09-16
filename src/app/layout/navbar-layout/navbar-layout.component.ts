import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-layout',
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class NavbarLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
