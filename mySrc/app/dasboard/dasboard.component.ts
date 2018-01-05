import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class DasboardComponent implements OnInit {

  cookieValue: string;

  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router) { }

  ngOnInit() {
    this.cookieValue = this.cookieService.get('Test');

    if (this.cookieValue == '') {
      this.router.navigate(['/login']);
    }
  }

  logout() {
    this.cookieService.delete('Test');
    this.router.navigate(['/login']);
  }

}
