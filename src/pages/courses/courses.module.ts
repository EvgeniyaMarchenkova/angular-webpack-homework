import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CourseService } from '../../core/services/course.service';
import { AuthorizationService } from '../../core/services/authorization.service';
import { CoursesComponent } from './courses.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  providers: [CourseService, AuthorizationService],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule {}
