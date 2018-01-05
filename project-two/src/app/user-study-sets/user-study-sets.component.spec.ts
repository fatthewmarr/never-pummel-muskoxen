import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStudySetsComponent } from './user-study-sets.component';

describe('UserStudySetsComponent', () => {
  let component: UserStudySetsComponent;
  let fixture: ComponentFixture<UserStudySetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStudySetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStudySetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
