import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';

@Injectable()
export class JwtService {

  getToken(): User {
    return window.localStorage['jwtToken'];
  }

  saveToken(token: User) {
    window.localStorage['jwtToken'] = token;
  }

  destroyToken() {
    window.localStorage.removeItem('jwtToken');
  }

}
