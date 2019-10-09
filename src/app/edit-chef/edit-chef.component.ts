import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Chef } from '../model/chef.model';
import { ChefService } from '../core/chef.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-chef',
  templateUrl: './edit-chef.component.html',
  styleUrls: ['./edit-chef.component.css']
})
export class EditChefComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private chefService: ChefService) { }
  addForm: FormGroup;
  chef: Chef;

  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  ngOnInit() {
    const userId = localStorage.getItem('editUserId');
    if (!userId) {
      alert('Invalid action.');
      this.router.navigate(['']);
      return;
    }
  this.addForm = this.formBuilder.group({
      id: [],
      name : ['', [Validators.required]],
      title: ['', [Validators.required]],
      email: ['',[Validators.required, , Validators.pattern(this.emailRegex)]],
      gender: [''],
      address: [''],
      phoneNumber: [''],
      date: [''],
    });
    const data = this.chefService.getUserById(+userId);
    this.addForm.setValue(data);
  }

  onSubmit() {
    const abc = this.chefService.update(this.addForm.value);
    localStorage.setItem('chefDetails', JSON.stringify(this.chefService.chefs));
    this.router.navigate(['chef']);
  }

  onCancel() {
    this.router.navigate(['']);
  }
  onselect() {
    const a = document.getElementById("phone");
    a.setAttribute("type", "number");
    a.setAttribute("value", "");
    document.body.appendChild(a);
  }
}