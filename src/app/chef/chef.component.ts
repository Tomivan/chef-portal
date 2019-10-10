import { Component, OnInit } from '@angular/core';
import { Chef } from '../model/chef.model';
import { ChefService } from '../core/chef.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {

  chefs: Chef[];
  

  constructor(private chefService: ChefService, private router: Router) { }

  editChef(chef: Chef) {
    console.log(chef);
    localStorage.removeItem('editUserId');
    localStorage.setItem('editUserId', chef.id.toString());
    this.router.navigate(['edit']);
  }

  deleteChef(chef: Chef) {
    console.log(chef);
    this.chefService.delete(chef);
  }


  ngOnInit() {
    this.chefs = this.chefService.getall();
    let auth = localStorage.getItem('loginId');
    if (!auth) {
      this.router.navigate(['/login'])
    } 
 
  }
  logOut() {
    localStorage.removeItem('loginId')
    this.router.navigate(['/login'])
  }

}
