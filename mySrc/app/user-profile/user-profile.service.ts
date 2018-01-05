import { IUser } from '../../user';
import { RequestOptions } from '@angular/http';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie-service';
import { OnInit } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class UserProfileService implements OnInit {

  private _usersUrl = 'http://localhost:8431/getit/users';
  user: IUser;

  constructor(private _http: HttpClient, private _cookieService: CookieService) {
    this.user = JSON.parse(this._cookieService.get('Test'));
  }


  public ngOnInit(): void {

}

getUserbyId(): Observable < IUser > {
  return this._http.get<IUser>(this._usersUrl + "/" + this.user.id);
}

saveUser(u: IUser): Observable<IUser> {
  let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  console.log("in updateUser() in user-profile.ts" + JSON.stringify(u));
 return this.updateUser(u, options);
}

updateUser(user: IUser, options): Observable<IUser>{
  let url = `${this._usersUrl}`;
  return this._http.put(url, user, options).map(() => user);
}

}