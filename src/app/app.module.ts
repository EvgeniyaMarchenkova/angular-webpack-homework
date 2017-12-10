import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../components/shared.module';
import { CourseService } from '../services/course.service';
import { AuthorizationService } from '../services/authorization.service';
import { AppComponent } from './app.component';
import { CoursesComponent } from '../pages/courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule
  ],
  providers: [CourseService, AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
