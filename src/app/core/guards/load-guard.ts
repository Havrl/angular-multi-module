import { CanLoad, Route, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable()
export class LoadGuard implements CanLoad {
    constructor(private authService: AuthService, private router: Router) {
    }

    canLoad(route: Route): Observable<boolean> {

        let isAuthenticated = false;

    // Check if the user is authenticated
    this.authService.isAuthenticated.pipe(take(1)).subscribe(data => {

        isAuthenticated = data;

        console.log('LoadGuard', isAuthenticated);

        // If the user is not authenticated, redirect to Login page
        if (!isAuthenticated) {

          this.router.navigateByUrl('/login');

          return false;
        }
    });

    return this.authService.isAuthenticated.pipe(take(1));

    }
}
