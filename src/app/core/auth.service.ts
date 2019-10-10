import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public jwtHelper: JwtHelperService) { }

  public isAuthenticated(): boolean {

<<<<<<< HEAD
    const token = localStorage.getItem('loginId');
=======
    const token = localStorage.getItem('token');
>>>>>>> c632537fa432959169f898a02a466a865219bcb5

    return !this.jwtHelper.isTokenExpired(token);
  }
}
