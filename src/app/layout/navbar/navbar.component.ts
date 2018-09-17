import { AuthService } from './../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-navbar',
  template: `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Multi-layout lazy loaded app</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item mr-4"><span class="nav-link">Welcome back {{ currentUser.firstName }}</span></li>
      <li class="nav-item active">
        <a class="nav-link" href="javascript:;" (click)="logout()">Logout</a>
      </li>
    </ul>
  </div>
</nav>
  `,
  styles: []
})
export class NavbarComponent implements OnInit {

    currentUser: User;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
      this.currentUser = this.authService.getCurrentUser();
  }

  logout() {
    this.authService.purgeAuth();

    this.router.navigate(['login']);

  }

}
