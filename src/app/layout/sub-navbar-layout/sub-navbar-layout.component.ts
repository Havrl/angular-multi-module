import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-navbar-layout',
  template: `
    <app-navbar></app-navbar>
    <app-sub-navbar></app-sub-navbar>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class SubNavbarLayoutComponent {
}
