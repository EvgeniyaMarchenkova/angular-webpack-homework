import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { CourseService } from '../services/course.service';
import { AppComponent } from './app.component';
import { CoursesComponent } from '../pages/courses/courses.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { ToolboxComponent } from '../components/toolbox/toolbox.component';
import { CourseItemComponent } from '../components/courseItem/courseItem.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    FooterComponent,
    HeaderComponent,
    ToolboxComponent,
    CourseItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
