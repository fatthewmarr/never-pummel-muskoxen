import { SignupPageComponent } from './signup-page/signup-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignupPageComponent } from './login-signup-page/login-signup-page.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' }, 
  { path: 'main', component: LoginSignupPageComponent },
  { path: 'login', component: LoginPageComponent},
  { path: 'signup', component: SignupPageComponent},
  { path: 'login/dashboard', component: DasboardComponent},
  {path: 'profile', component: UserProfileComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
