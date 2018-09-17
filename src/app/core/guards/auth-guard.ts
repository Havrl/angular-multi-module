import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {

    let isAuthenticated = false;

    // Check if the user is authenticated
    this.authService.isAuthenticated.pipe(take(1)).subscribe(data => {

        isAuthenticated = data;

        console.log('AuthGuard', isAuthenticated);

        // If the user is not authenticated, redirect to Login page
        if (!isAuthenticated) {

          this.router.navigateByUrl('/login');

          return false;
        }
    });

    return this.authService.isAuthenticated.pipe(take(1));

  }
}
