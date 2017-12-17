import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';

import { SharedModule } from '../shared/shared.module';
import { CoursesModule } from '../pages/courses/courses.module';
import { LoginModule } from '../pages/login/login.module';
import { CourseService } from '../core/services/course.service';
import { AuthorizationService } from '../core/services/authorization.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    LoginModule,
    CoursesModule,
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  providers: [CourseService, AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
