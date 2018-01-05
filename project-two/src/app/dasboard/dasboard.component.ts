import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MatMenuModule } from '@angular/material/menu';
import { StudySetService } from '../study-set.service';

@Component({
 selector: 'app-dasboard',
 templateUrl: './dasboard.component.html',
 styleUrls: ['./dasboard.component.css'],
 encapsulation: ViewEncapsulation.None
})

export class DasboardComponent implements OnInit {

 cookieValue: string;
 name : string;

 constructor(private setService : StudySetService, private http: HttpClient, private cookieService: CookieService, private router: Router) { }

 ngOnInit() {
   this.cookieValue = this.cookieService.get('Test');

   if (this.cookieValue == '') {
     this.router.navigate(['/login']);
   }
 }

 processForm() {
   this.setService.getSetByName(this.name).subscribe(val => this.setService.currentSet = val);
   var that = this;
   setTimeout(function() {
     that.gotoSet();
   }, 50);
 }
 gotoSet() {
   if(this.setService.currentSet != null)
      if(this.setService.currentSet.name == this.name)
       this.router.navigate(['set']);
 }
 
 logout() {
   this.cookieService.delete('Test');
   this.router.navigate(['/login']);
 }

}