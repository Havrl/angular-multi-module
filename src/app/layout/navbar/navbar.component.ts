import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <div class="nav-bar">Navbar here</div>
  `,
  styles: ['.nav-bar { width: 100%; height: 50px; background-color: blue }']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
