import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

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
    let abc = localStorage.getItem('signUpId')
    let bcd = JSON.parse(abc)
    const { email, password } = this.model;

    if (email !== bcd.email){
      alert("email cannot be found in the database")
    } else if (password !== bcd.password){
      alert("password cannot be found in the database")
    }else {
      this.router.navigate(['/chef']);
    }
  }
}
