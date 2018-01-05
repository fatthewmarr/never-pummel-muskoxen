import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudySetViewComponent } from './study-set-view.component';

describe('StudySetViewComponent', () => {
  let component: StudySetViewComponent;
  let fixture: ComponentFixture<StudySetViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudySetViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudySetViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
