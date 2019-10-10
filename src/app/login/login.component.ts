import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
<<<<<<< HEAD
import { JsonPipe } from '@angular/common';
=======
>>>>>>> c632537fa432959169f898a02a466a865219bcb5

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
<<<<<<< HEAD
    let signUp = localStorage.getItem('signUpId')
    let logIn = JSON.parse(signUp)
    const { email, password } = this.model;

    if (email !== logIn.email){
      alert("email cannot be found in the database")
    } else if (password !== logIn.password){
      alert("password cannot be found in the database")
    }else {
      localStorage.setItem('loginId', JSON.stringify({email: logIn.email, password: logIn.password}))
=======
    let abc = localStorage.getItem('signUpId')
    let bcd = JSON.parse(abc)
    const { email, password } = this.model;

    if (email !== bcd.email){
      alert("email cannot be found in the database")
    } else if (password !== bcd.password){
      alert("password cannot be found in the database")
    }else {
>>>>>>> c632537fa432959169f898a02a466a865219bcb5
      this.router.navigate(['/chef']);
    }
  }
}
