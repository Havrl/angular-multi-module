import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styles: []
})
export class AppComponent implements OnInit {
    constructor(private authService: AuthService) {}

    ngOnInit() {
        this.authService.populate();
    }
}
