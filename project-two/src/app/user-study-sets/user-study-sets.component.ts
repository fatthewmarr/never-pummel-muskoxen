import { Component } from '@angular/core';
import { StudySetService } from '../study-set.service';
import { StudySet } from '../studyset';
import { Observable } from 'rxjs/observable'

@Component({
  selector: 'app-user-study-sets',
  templateUrl: './user-study-sets.component.html',
  styleUrls: ['./user-study-sets.component.css']
})
export class UserStudySetsComponent  {
  OSets : Observable<StudySet[]>;
  sets : StudySet[];
  
    constructor(private setService: StudySetService) {
      this.OSets = this.setService.getAuthorSets(1);
      this.OSets.subscribe(val => this.sets = val);
    }
}   