import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CourseService } from '../../core/services/course.service';
import { AuthorizationService } from '../../core/services/authorization.service';
import { CoursesComponent } from './courses.component';
import { SharedModule } from '../../shared/shared.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule
  ],
  providers: [CourseService, AuthorizationService],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule {}
