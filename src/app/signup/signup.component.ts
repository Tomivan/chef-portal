import { Component } from '@angular/core';
import { User } from '../model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent  {
 user = new User();
 model: any = this.user;

  constructor(private router: Router) { }

 onSubmit() {
    localStorage.setItem('signUpId', JSON.stringify(this.model))
    this.router.navigate(['/login']);
 }
  
}
