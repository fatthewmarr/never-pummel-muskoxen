import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { SlickModule } from 'ngx-slick';

import { AppComponent } from './app.component';
import { LoginSignupPageComponent } from './login-signup-page/login-signup-page.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent, CreateStudysetModal, QAModal } from './carousel/carousel.component';
import { UserStudySetsComponent } from './user-study-sets/user-study-sets.component';
import { UserStudySessionsComponent } from './user-study-sessions/user-study-sessions.component';
import { StudySetService } from './study-set.service';
import { QuestionAnswerService } from './question-answer.service';
import { MatFormFieldModule, MatDialogModule, MatRadioModule } from '@angular/material';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileService } from './user-profile/user-profile.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginSignupPageComponent,
    LoginPageComponent,
    SignupPageComponent,
    DasboardComponent,
    NavbarComponent,
    CarouselComponent,
    UserStudySetsComponent,
    UserStudySessionsComponent,
    CreateStudysetModal,
    QAModal,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    SlideMenuModule,
    NgbModule.forRoot(),
    SlickModule.forRoot(),
    MatFormFieldModule,
    MatDialogModule,
    HttpClientModule,
    MatRadioModule,
	HttpModule
  ],
  entryComponents: [CreateStudysetModal, QAModal],
  providers: [CookieService,  StudySetService, QuestionAnswerService, UserProfileService],

  bootstrap: [AppComponent]
})
export class AppModule { }
