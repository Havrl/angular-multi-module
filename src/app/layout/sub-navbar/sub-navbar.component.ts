import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-navbar',
  template: `
    <div class="sub-nav-bar">Sub Navbar here</div>
  `,
  styles: ['.nav-bar { width: 100%; height: 40px; background-color: grey }']
})
export class SubNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
