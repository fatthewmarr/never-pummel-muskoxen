import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { StudySetService } from '../study-set.service';
import { StudySet } from '../studyset';
import { Observable } from 'rxjs/observable';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user-study-sets',
  templateUrl: './user-study-sets.component.html',
  styleUrls: ['./user-study-sets.component.css']
})
export class UserStudySetsComponent  {
  OSets : Observable<StudySet[]>;
  sets : StudySet[];
  cookieValue: string;
  
    constructor(private router: Router, private setService: StudySetService, private cookieService: CookieService) {

      this.cookieValue = JSON.parse(this.cookieService.get('Test'));

      this.OSets = this.setService.getAuthorSets(this.cookieValue["id"]);
      this.OSets.subscribe(val => this.sets = val);
    }

    gotoSet(set : StudySet) {
      this.setService.currentSet = set;
      this.router.navigate(['login/dashboard/set']);
    }
}   