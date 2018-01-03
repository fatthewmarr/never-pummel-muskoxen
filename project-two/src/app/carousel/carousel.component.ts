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
  
  openCreateModal(): void {
    let dialogRef = this.dialog.open(CreateStudysetModal, {
      width: '400px',
      data: {}
    });

    var that = this;
    dialogRef.afterClosed().subscribe(result => {
      setTimeout(function() {  that.openQAModal(); }, 300);
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

  constructor(private setService: StudySetService,
    public dialogRef: MatDialogRef<CreateStudysetModal>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  closeThis() {
    this.dialogRef.close();
  }

  createStudySet() {
    this.set.name = this.name;
    this.set.author = { "id" : 1 };
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