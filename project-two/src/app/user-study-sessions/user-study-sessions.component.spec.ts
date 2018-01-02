import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStudySessionsComponent } from './user-study-sessions.component';

describe('UserStudySessionsComponent', () => {
  let component: UserStudySessionsComponent;
  let fixture: ComponentFixture<UserStudySessionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStudySessionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStudySessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
