import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddChefComponent } from '../app/add-chef/add-chef.component';
import { EditChefComponent } from './edit-chef/edit-chef.component';
import { ChefComponent } from './chef/chef.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'add', component: AddChefComponent},
  { path: 'edit', component: EditChefComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path: 'chef', component: ChefComponent},
  {path: '', redirectTo: 'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
