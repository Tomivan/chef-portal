import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  model: any = this.user;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  login() {
    let signUp = localStorage.getItem('signUpId')
    let logIn = JSON.parse(signUp)
    const { email, password } = this.model;

    if (email !== logIn.email){
      alert("email cannot be found in the database")
    } else if (password !== logIn.password){
      alert("password cannot be found in the database")
    }else {
      localStorage.setItem('loginId', JSON.stringify({email: logIn.email, password: logIn.password}))
      this.router.navigate(['/chef']);
    }
  }
}
