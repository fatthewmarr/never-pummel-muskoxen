import { Injectable } from '@angular/core';
import { StudySet } from './studyset';
import { environment } from '../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const API_URL = environment.apiUrl + "/sets";
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class StudySetService {

  currentSet : StudySet;

  constructor(private http: HttpClient) { }

  public getStudySets(){
    return this.http.post<StudySet[]>(API_URL, "");
  }
  
  public addStudySet(set: StudySet){
    var that = this;
    this.http.post<StudySet>(API_URL + "/addset", set, httpOptions).subscribe();
    setTimeout(function() {  that.getSetByName(set.name).subscribe(val => that.currentSet = val)}, 50);
  }

  public updateStudySet(set: StudySet, amount : number){
    return this.http.patch<StudySet>(API_URL + "/" + set.id, StudySet, httpOptions).subscribe();
  }

  public getAuthorSets(author_id : number) {
    return this.http.post<StudySet[]>(API_URL + "/author/" + author_id, "");
  }

  public getSetByName(name : String) {
    console.log(name)
    return this.http.post<StudySet>(API_URL + "/name/" + name, "");
  }
}
