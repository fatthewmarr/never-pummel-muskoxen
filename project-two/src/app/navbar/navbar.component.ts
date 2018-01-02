import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private cookieService: CookieService, private router: Router) { }

  ngOnInit() {
  }

  private menuItemsArray: any[] = [
    { "title": "Profile", "link": "/profile" },
    { "title": "Mobile Bill", "link": "#" },
    {
      "title": "Home and Kitchen", "link": "#",
      "subItems": [
        { "title": "Furniture", "link": "#" },
        { "title": "Cookware", "link": "#" },
      ]
    },
    {
      "title": "Car and Bike Accessories", "link": "#",
      "subItems": [
        { "title": "Tyres and Alloys", "link": "#" },
        { "title": "Comfort and Safety", "link": "#" },
      ]
    },
    { "title": "Logout" },
  ];

  config = {
    animation: "arrowturn",
  };

  private onItemSelect(item: any) {

    this.router.navigate([item.link]);
    if (item.title == "Logout") {
      this.cookieService.delete('Test');
      window.location.reload();
    }

  }

}
