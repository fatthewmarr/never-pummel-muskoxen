import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { StudySession } from '../studysession';

const API_URL = environment.apiUrl + "/studysessions";
const httpOptions = {
 headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class StudysessionserviceService {

 currentSession: StudySession;
 constructor(private http: HttpClient) { }

 public addStudySession(session: StudySession){
   this.http.post<StudySession>(API_URL + "/addstudysess", session, httpOptions).subscribe();
 }

 public getAuthorSessions(id: number){
      var body= {"id": id};
      return this.http.post<StudySession[]>(API_URL + "/getmystudysess", body, httpOptions);
 }
}