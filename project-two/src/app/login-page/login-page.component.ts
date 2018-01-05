import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

export class LoginInfo {
  email: '';
  password: '';
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) { }

  user: LoginInfo;
  valid: Boolean = false;
  cookieValue = 'UNKNOWN';

  ngOnInit() {
    this.user = {
      email: '',
      password: ''
    }
  }

  processForm() {

    // Setting up the body of the form
    const body = {
      email: this.user.email,
      password: this.user.password
    };

    const req = this.http.post('http://localhost:8431/getit/login', body)
      .subscribe(
      res => {
        if (res == null) {
          this.valid = true;
        } else if (res == '') {
          console.log("nothing");
        } else {
          this.cookieService.set('Test', JSON.stringify(res));
          this.router.navigate(['login/dashboard']);
        }
      },
      err => {
        console.log("An error occurred during the post request.");
      }
      );
  }

}
