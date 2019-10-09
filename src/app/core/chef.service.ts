import { Injectable } from '@angular/core';
import { Chef } from '../model/chef.model';

@Injectable({
  providedIn: 'root'
})
export class ChefService {


  chefs: Chef[] = localStorage.getItem('chefDetails') ? JSON.parse(localStorage.getItem('chefDetails')) : [];

  create(chef: Chef) {
    let itemIndex;
    if (this.chefs){
      itemIndex = this.chefs.length;
      chef.id = this.getnextId();
      console.log(chef);
      this.chefs[itemIndex] = chef;
    }
  }

  delete(chef: Chef) {
    this.chefs.splice(this.chefs.indexOf(chef), 1);
    localStorage.setItem('chefDetails', JSON.stringify(this.chefs));
  }

  update(chef: Chef) {
    const itemIndex = this.chefs.findIndex(item => item.id === chef.id);
    this.chefs[itemIndex] = chef;
  }

  getall(): Chef[] {
    console.log('chefservice:getall');
    console.log(this.chefs);
    return this.chefs;
  }

  getUserById(id: number) {
    console.log(id);
    const itemIndex = this.chefs.findIndex(item => item.id === id);
    console.log(itemIndex);
    return this.chefs[itemIndex];
  }

  getnextId(): number {
    let highest = 0;
    this.chefs.forEach(function (item) {
      if (highest === 0) {
        highest = item.id;
      }
      if (highest < item.id) {
        highest = item.id;
      }
    });
    return highest + 1;
  }
}

