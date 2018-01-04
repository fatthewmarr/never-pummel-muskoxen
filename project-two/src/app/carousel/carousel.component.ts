import { IUser } from './../../user';
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { StudySetService } from '../study-set.service';
import { StudySet } from '../studyset';
import { Observable } from 'rxjs/observable'
import { environment } from '../../environments/environment';
import { QA } from '../QA';
import { QuestionAnswerService } from '../question-answer.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { StudysessionserviceService } from '../studysessionservice.service';
import { StudySession } from '../../studysession';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit {
  
  OQA : Observable<QA[]>;
  QA : QA[];

  mode : String;

  constructor(private cookie : CookieService, private router: Router, private QAService: QuestionAnswerService, public dialog: MatDialog) {
    this.OQA = this.QAService.getQAsBySet("no");
    this.OQA.subscribe(val => this.QA = val);
  }

  ngOnInit() {  
  }
  
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};

  afterChange(e) {
  }

  goToProfile() {
    this.router.navigate(["/profile"]);
  }
  
  openCreateStudySeshModal(): void{
    let dialogRef = this.dialog.open(UserStudySessionsModal, {
 
      width: '400px',
      data: {}
    });
  }

  openCreateModal(): void {
    let dialogRef = this.dialog.open(CreateStudysetModal, {
      width: '400px',
      data: {}
    });

    var that = this;
    dialogRef.afterClosed().subscribe(result => {
      setTimeout(function() {  that.openQAModal(); }, 350);
    });
  }


  openQAModal(): void {
    let dialogRef = this.dialog.open(QAModal, {
      width: '450px',
      height: '80%',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['login/dashboard/set']);
    }); 
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  template: `<div class="example-container">
              <section class="mat-typography">
                <h2 style="text-align:center;">New Studyset</h2>
              </section>
              <mat-form-field>
               <input matInput [(ngModel)]="name" placeholder="Studyset Name">
              </mat-form-field>
              <div style="display: flex; justify-content:center;">
              <button mat-button (click)="createStudySet()">Create</button>
              <button mat-button (click)="closeThis()">Cancel</button> </div>
            </div>`,
})

export class CreateStudysetModal {

  name = '';
  set : StudySet = new StudySet();
  id : number;

  constructor(private cookieService: CookieService,
    private setService: StudySetService,
    public dialogRef: MatDialogRef<CreateStudysetModal>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.id = JSON.parse(this.cookieService.get('Test')).id;
     }


  OnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  closeThis() {
    this.dialogRef.close();
  }

  createStudySet() {
    this.set.name = this.name;
    this.set.author = { "id" : this.id };
    this.setService.addStudySet(this.set);
    this.dialogRef.close();
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  template: ` <div *ngFor="let qa of QA; let i=index">
  <mat-form-field >
      <input matInput [(ngModel)]="QA[i].question" placeholder="Question">    
  </mat-form-field>
  <mat-form-field>
      <input matInput [(ngModel)]="QA[i].answer" placeholder="Answer">
  </mat-form-field> <br>
  </div> <button mat-raised-button (click)="addQA()">Add QA</button>
  <button mat-raised-button (click)="submit()">Submit</button>`,
})
export class QAModal {

  QA : QA[] = [];

  constructor(private QAService: QuestionAnswerService,
    private setService: StudySetService,
    public dialogRef: MatDialogRef<QAModal>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      for(var i = 0; i < 3; i++) {
        var currentQA = new QA();
        currentQA.answer = "";
        currentQA.question = "";
        currentQA.studyset = { "id": this.setService.currentSet.id };
        this.QA.push(currentQA);
      }
     }


  onNoClick(): void {
    this.dialogRef.close();
  }

  addQA() {
    var currentQA = new QA();
    currentQA.answer = "";
    currentQA.question = "";
    this.QA.push(currentQA);
  }

  submit() {
    var temp : QA[] = [];
    for(let i = 0; i < this.QA.length-1; i++) {
      if(this.QA[i].question) {
        temp.push(this.QA[i]);
      }
    }
    this.QAService.addQAs(temp);
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-user-study-sessions-modal',
  template: `<div class="example-container">
  <section class="mat-typography">
    <h2 style="text-align:center;">New StudySession</h2>
  </section>
  <mat-form-field>
    <input matInput [(ngModel)]="sessionName" placeholder="Study Session Name" required>
  </mat-form-field>

  <mat-form-field>
    <input matInput [(ngModel)]="sessionLocation" placeholder="Location" required>
  </mat-form-field>

  <mat-form-field>
    <input matInput type="date" [(ngModel)]="sessionDate" placeholder="Date" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}">

  </mat-form-field>

  <p style="text-align:center;"> Study Session Time </p>

  <mat-form-field>
    <mat-select placeholder="Hour" [(ngModel)]="sessionHour" name="hour">
      <mat-option *ngFor="let hour of hours" [value]="hour.value">
       {{hour.viewValue}}
      </mat-option>
    </mat-select>
  </mat-form-field>


<mat-form-field>
  <mat-select placeholder="Minute" [(ngModel)]="sessionMinute" name="minute">
    <mat-option *ngFor="let minute of minutes" [value]="minute.value">
     {{minute.viewValue}}
    </mat-option>
  </mat-select>
</mat-form-field>


<mat-form-field>
<mat-select placeholder="AM | PM" [(ngModel)]="sessionNoc" name="noc">
  <mat-option *ngFor="let noc of nocs" [value]="noc.value">
   {{noc.viewValue}}
  </mat-option>
</mat-select>
</mat-form-field>

  
    <p> Selected value: {{sessionTime}} </p>

  <mat-form-field>
    <textarea matInput matTextareaAutosize [(ngModel)]="sessionDescription" placeholder="Description"></textarea>
  </mat-form-field>

  <div style="display: flex; justify-content:center;">
    <button mat-button (click)="createStudySession()">Create Study Session</button>
  </div>
</div>`,
})

export class UserStudySessionsModal implements OnInit {
  ngOnInit() {
    this.studySession={
      id: 0,
      authorid: 0,
      user: [],
      name: "",
      location: "",
      submitted: "",
      description: ""
  },
  this.student={
    id: 0,
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  }

}

  student: IUser;
  sessionName: string;
  sessionLocation: string;
  sessionDate: string;
  sessionTime: string;
  selectedValue: string;
  sessionDescription: string;
  studySession: StudySession;
  sessionHour: number;
  sessionMinute: string;
  sessionNoc: string;

  hours = [
    {value: 12, viewValue: '12'},
    {value: 11, viewValue: '11'},
    {value: 10, viewValue: '10'},
    {value: 9 , viewValue: '09'},
    {value: 8, viewValue: '08'},
    {value: 7, viewValue: '07'},
    {value: 6 , viewValue: '06'},
    {value: 5, viewValue: '05'},
    {value: 4, viewValue: '04'},
    {value: 3 , viewValue: '03'},
    {value: 2, viewValue: '02'},
    {value: 1, viewValue: '01'}
  ];

  minutes = [
    {value: '00', viewValue: '00'},
    {value: '05', viewValue: '05'},
    {value: '10', viewValue: '10'},
    {value: '15' , viewValue: '15'},
    {value: '20', viewValue: '20'},
    {value: '25', viewValue: '25'},
    {value: '30' , viewValue: '30'},
    {value: '35', viewValue: '35'},
    {value: '40', viewValue: '40'},
    {value: '45' , viewValue: '45'},
    {value: '50', viewValue: '50'},
    {value: '55', viewValue: '55'}
  ];

  nocs = [
    {value: 'AM', viewValue: 'AM'},
    {value: 'PM', viewValue: 'PM'}
  ];
  

  constructor( public dialogRef: MatDialogRef<UserStudySessionsModal>,
    @Inject(MAT_DIALOG_DATA) public data: any, private cookieService: CookieService,
  private service: StudysessionserviceService) { }

  createStudySession(){
    this.student = JSON.parse(this.cookieService.get('Test'));
    console.log("The id of the user is: " + this.student.id);
    console.log("In Create Study Session Function");
    if(this.sessionNoc == 'AM' && this.sessionHour == 12){
      this.sessionHour = 0;
      this.sessionHour.toString;
      console.log("The hour is: " + this.sessionHour + '0');
    }
    if(this.sessionNoc == 'PM' && this.sessionHour != 12){
      this.sessionHour = this.sessionHour + 12;
      this.sessionHour.toString;
      console.log("The input hour is: " + this.sessionHour);
    }
    this.studySession.location = this.sessionLocation;
    this.studySession.name = this.sessionName;
    this.studySession.description = this.sessionDescription;
    this.studySession.submitted = this.sessionDate + " " + this.sessionHour + ":" + this.sessionMinute;
    console.log("The time for event is: " + this.studySession.submitted);
    console.log("The Date is: " + this.sessionDate);
    this.studySession.authorid = this.student.id;
    this.studySession.user = [this.student];
    console.log("Study Session json is " + JSON.stringify(this.studySession));
	this.service.addStudySession(this.studySession);
	this.dialogRef.close();
    

  }
}