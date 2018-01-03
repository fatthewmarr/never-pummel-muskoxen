import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { StudySetService } from '../study-set.service';
import { StudySet } from '../studyset';
import { Observable } from 'rxjs/observable'
import { environment } from '../../environments/environment';
import { QA } from '../QA';
import { QuestionAnswerService } from '../question-answer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-study-set-view',
  templateUrl: './study-set-view.component.html',
  styleUrls: ['./study-set-view.component.css']
})
export class StudySetViewComponent implements OnInit {

  OQA : Observable<QA[]>;
  QA : QA[];
  var
  mode : String;
  set : StudySet;

  constructor(private setService : StudySetService, private router: Router, 
    private QAService: QuestionAnswerService, public dialog: MatDialog) {
    this.set = this.setService.currentSet;
    this.OQA = this.QAService.getQAsBySet(this.set.name);
    this.OQA.subscribe(val => this.QA = val);
  }
  openQAModal(): void {
    let dialogRef = this.dialog.open(QAModal, {
      width: '450px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.OQA = this.QAService.getQAsBySet(this.set.name);
      this.OQA.subscribe(val => this.QA = val);
    }); 
  }
  ngOnInit() {
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
      console.log(this.setService.currentSet);
      for(var i = 0; i < 3; i++) {
        var currentQA = new QA();
        currentQA.answer = "";
        currentQA.question = "";
        currentQA.studyset = { "id": this.setService.currentSet.id };
        this.QA.push(currentQA);
      }
     }

  onNoClick(): void {
    console.log(this.setService.currentSet);
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