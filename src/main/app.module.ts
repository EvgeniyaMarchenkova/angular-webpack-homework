import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '../shared/shared.module';
import { CoursesModule } from '../pages/courses/courses.module';
import { LoginModule } from '../pages/login/login.module';
import { CourseService } from '../core/services/course.service';
import { AuthorizationService } from '../core/services/authorization.service';
import { AppComponent } from './app.component';
import { AuthInterceptor } from '../core/services/authInterceptor.service';

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
    HttpClientModule,
    ModalModule.forRoot(),
    NgbModule.forRoot(),
    BootstrapModalModule
  ],
  providers: [ CourseService,
               AuthorizationService,
               {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
