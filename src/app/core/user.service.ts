import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedIn: boolean = false;
  users: User[];
  user?: any;

  constructor() { 
    this.users = [];
    this.user = {};
  }
  
  // addUser(user: User) {
  //   this.users.unshift(user.value);
  //   console.log(user)
  //   localStorage.setItem('users', JSON.stringify(this.users))
  // }

  login(email: string, password: string) {
    if (localStorage.getItem('users') === null) {
      this.users = []
      this.loggedIn = false;
      return;
    } else {
      this.user = JSON.parse(localStorage.getItem('users'))[0];
      if ((email === this.user.email) && (password === this.user.password)) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    }
  }
}
