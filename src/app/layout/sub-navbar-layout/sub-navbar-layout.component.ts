import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-navbar-layout',
  template: `
  <app-navbar></app-navbar>
  <app-sub-navbar></app-sub-navbar>
  <div id="container" class="container-fluid">
      <router-outlet></router-outlet>
  </div>
`,
styles: ['#container { padding-top: 25px; }']
})
export class SubNavbarLayoutComponent {
}
