import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { UserProfileService } from './user-profile.service';
import { IUser } from '../../user';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RequestOptions } from '@angular/http';
import {Headers} from '@angular/http';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: IUser;
  imageUsername: string;
  errorMessage: string;

 
  constructor(private _userService: UserProfileService, private _http: HttpClient, private _cookieService: CookieService) { 
    this.user = JSON.parse(this._cookieService.get('Test'));
}

  ngOnInit() {
    this.imageUsername=this.user.firstname;
  
  }
  
  save(userForm: NgForm){

    this._cookieService.set('Test', JSON.stringify(userForm.value));
    console.log("in user-profile" + JSON.stringify(userForm.value));
    let p = Object.assign({}, this.user, userForm.value);

    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    
    this._userService.saveUser(p).subscribe(()=>this.onSaveComplete(),
    (error: any) => this.errorMessage = <any>error);
  }

  onSaveComplete():void {
    this.imageUsername=this.user.firstname;
  }
}