import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-layout',
  template: `
    <app-navbar></app-navbar>
    <div id="container" class="container-fluid">
        <router-outlet></router-outlet>
    </div>
  `,
  styles: ['#container { padding-top: 25px; }']
})
export class NavbarLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
