import { Component, OnInit, ViewContainerRef  } from '@angular/core';
import * as moment from 'moment';
import { Overlay } from 'ngx-modialog';
import { Modal } from 'ngx-modialog/plugins/bootstrap';

import { CourseService } from '../../core/services/course.service';
import { Course } from '../../shared/interfaces/course'

@Component({
  selector: 'courses-list',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{
  allCourses: Course[]=[];
  isUpdating: boolean;

  constructor(private courseService: CourseService,
              public modal: Modal) {}

  ngOnInit() {
    this.allCourses = this.courseService.getAllCourses();
    this.isUpdating = false;
  }

  deleteCourse(id) {
    const isDelete = confirm("Do you really want to delete this course?");
    if (isDelete) {
      this.courseService.deleteCourse(id);
    }
  }


  updateCourse(id) {
    this.isUpdating = true;
  }
}
