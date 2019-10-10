import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Chef } from '../model/chef.model';
import { ChefService } from '../core/chef.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-chef',
  templateUrl: './add-chef.component.html',
  styleUrls: ['./add-chef.component.css']
})

export class AddChefComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private chefService: ChefService) { }
  addForm: FormGroup;
  @Output()
  createChef = new EventEmitter<Chef>();

  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  ngOnInit() {
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
  }

  isInvalid(name: string) {
    const control = this.addForm.get(name);
    return control.invalid && control.dirty;
  }

  isEmailInvalid(name: string) {
    const control = this.addForm.get(name);
    return control.invalid && control.dirty;
  }

  onSubmit() {
    this.chefService.create(this.addForm.value)
    let chefArray = localStorage.getItem('chefDetails') ? JSON.parse(localStorage.getItem('chefDetails')) : [];
    chefArray.push(this.addForm.value);
    localStorage.setItem('chefDetails', JSON.stringify(chefArray));
    this.router.navigate(['chef']);
  }
  onCancel() {
    this.router.navigate(['chef'])
  }
}