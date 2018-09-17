import { JwtService } from './jwt.service';
import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { ApiService } from './api.service';

@Injectable()
export class AuthService {

  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(
    private jwtService: JwtService,
    private apiService: ApiService
) { }

  populate() {
    this.purgeAuth();
  }

  setAuth(user: User) {

    this.jwtService.saveToken(user);

    // Set current user data into observable
    this.currentUserSubject.next(user);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
  }

  purgeAuth() {

    // Remove JWT from localstorage
    this.jwtService.destroyToken();

    // Set current user to an empty object
    this.currentUserSubject.next({} as User);
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  attemptAuth() {
    return this.apiService.get('/users')
      .toPromise()
      .then(res => {
            if (res) {
                const data = res[0];
              const usr = <User>{
                id: data.id,
                email: data.email,
                firstName: data.name
              };
              this.setAuth(usr);
            } else {
              this.purgeAuth();
              throw new Error('Failed to get user details');
            }
            return this;
          })
          .catch(err => {
            this.purgeAuth();
            throw new Error('Failed to login');
          });
  }

}
