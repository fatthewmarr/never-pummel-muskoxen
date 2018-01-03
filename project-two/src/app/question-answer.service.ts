import { Injectable } from '@angular/core';
import { StudySet } from './studyset';
import { environment } from '../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { QA } from './QA';

const API_URL = environment.apiUrl + "/qa";
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class QuestionAnswerService {

  currentQA : QA;

  constructor(private http: HttpClient) { }

  public getAllQAs(){
    return this.http.post<QA[]>(API_URL, "");
  }

  public addQAs(QAs: QA[]){
    this.http.post<QA[]>(API_URL + "/add", QAs, httpOptions).subscribe();
  }

  public getQAsBySet(name : String) {
    return this.http.post<QA[]>(API_URL + "/" + name, "");
  }
}
