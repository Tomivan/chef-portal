import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChefComponent } from './chef/chef.component';
import { AddChefComponent } from './add-chef/add-chef.component';
import { EditChefComponent } from './edit-chef/edit-chef.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MustMatchDirective } from './helpers/must-match.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChefComponent,
    AddChefComponent,
    EditChefComponent,
    LoginComponent,
    SignupComponent,
    MustMatchDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
