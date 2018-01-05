import { Component, Inject } from '@angular/core';
import {StudysessionserviceService} from '../studysessionservice.service';
import { StudySession } from '../../studysession';
import { Observable } from 'rxjs/observable';
import { CookieService } from 'ngx-cookie-service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
selector: 'app-user-study-sessions',
templateUrl: './user-study-sessions.component.html',
styleUrls: ['./user-study-sessions.component.css']
})
export class UserStudySessionsComponent  {

OSessions : Observable<StudySession[]>;
sessions : StudySession[];
cookieValue: string;

  constructor(public dialog: MatDialog, private sessionService: StudysessionserviceService, private cookieService: CookieService) {

    this.cookieValue = JSON.parse(this.cookieService.get('Test'));

    this.OSessions = this.sessionService.getAuthorSessions(this.cookieValue["id"]);
    this.OSessions.subscribe(val => this.sessions = val);
  }
  openSessionModal(session : StudySession): void {
    this.sessionService.currentSession = session;
    let dialogRef = this.dialog.open(viewStudySessionModal, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => { });
  }
}

@Component({
selector: 'dialog-overview-example-dialog',
template: `<div class="example-container">
            <section class="mat-typography">
              <b><h1 style="text-align:center;">{{session.name}}</h1></b><br>
              <h3 style="text-align:center;">When: {{session.submitted | date:'MM/dd/yyyy - h:mma'}}</h3><br>
              <h3 style="text-align:center;">Where: {{session.location}}</h3><br>
              <h3 style="text-align:center;">Description: {{session.description}}</h3>
            </section>
            <div style="display: flex; justify-content:center;">
            <button mat-button (click)="closeThis()">Cancel</button> </div>
          </div>`,
})
export class viewStudySessionModal {

session : StudySession;

constructor(private sessionService: StudysessionserviceService,
  public dialogRef: MatDialogRef<viewStudySessionModal>,
  @Inject(MAT_DIALOG_DATA) public data: any) {
    this.session = this.sessionService.currentSession;
   }

onNoClick(): void {
  this.dialogRef.close();
}

closeThis() {
  this.dialogRef.close();
}
}