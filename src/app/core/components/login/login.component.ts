import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
  <div class="container">
  <div class="row">
    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
      <div class="card card-signin my-5">
        <div class="card-body">
          <h5 class="card-title text-center">Sign In</h5>
          <form class="form-signin">
            <div class="form-group">
              <input type="email" id="inputEmail" class="form-control" placeholder="Email address" value="admin@ocrex.com">
            </div>

            <div class="form-group">
              <input type="password" id="inputPassword" class="form-control" placeholder="Password" value="psw$$ord">
            </div>

            <button class="btn btn-lg btn-primary btn-block text-uppercase" type="button" (click)="signin()">Sign in</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  signin() {

      this.authService.attemptAuth()
      .then(
        result => this.router.navigate(['/companies'])
      ).catch(
        err => console.log('login failed')
      );
  }

}
