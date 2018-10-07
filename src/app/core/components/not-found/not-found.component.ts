import { Component, OnInit } from '@angular/core';

/**
 * This component represents the not found page and used by app-routing.module.ts.
 */
@Component({
  selector: 'app-not-found',
  template: '<h1>Resource not found.</h1>',
  styles: []
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
