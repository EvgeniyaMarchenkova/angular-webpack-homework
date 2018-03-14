import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { CoursesModule } from '../pages/courses/courses.module';
import { LoginModule } from '../pages/login/login.module';
import { CourseService } from '../core/services/course.service';
import { AuthorizationService } from '../core/services/authorization.service';
import { AppComponent } from './app.component';
import { httpInterceptorProviders } from '../core/interceptors/index';
import {CourseFormModule} from '../pages/courseForm/courseForm.module';
import {CoursesComponent} from '../pages/courses/courses.component';
import {CourseFormComponent} from '../pages/courseForm/main/courseForm.component';
import {LoginComponent} from '../pages/login/login.component';
import {PageNotFoundComponent} from '../pages/pageNotFound/pageNotFound.component';

const appRoutes: Routes = [
    { path: '',   redirectTo: '/courses', pathMatch: 'full' },
    { path: 'courses', component: CoursesComponent },
    { path: 'courses/new', component: CourseFormComponent },
    { path: 'courses/:id', component: CourseFormComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    LoginModule,
    CoursesModule,
    CourseFormModule,
    HttpClientModule,
    ModalModule.forRoot(),
    NgbModule.forRoot(),
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
    ),
    BootstrapModalModule
  ],
  providers: [ CourseService,
               AuthorizationService,
               httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
