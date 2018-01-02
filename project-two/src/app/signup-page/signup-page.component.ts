import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

export class RegisterLoginInfo {
  email: '';
  firstname: '';
  lastname: '';
  password: '';
}

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})

export class SignupPageComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) { }

  user: RegisterLoginInfo;
  valid: Boolean = false;
  cookieValue = 'UNKNOWN';

  ngOnInit() {
    this.user = {
      email: '',
      firstname: '',
      lastname: '',
      password: ''
    }
  }

  processForm() {

    // Setting up the body of the form
    const body = {
      email: this.user.email,
      firstname: this.user.firstname,
      lastname: this.user.lastname,
      password: this.user.password
    };

    const req = this.http.post('http://localhost:8431/getit/register', body)
    .subscribe(
      res => {
        this.router.navigate(['/login']);
      },
      err => {
        console.log("An error occurred during the post request.");
      }
    );

  }

}
