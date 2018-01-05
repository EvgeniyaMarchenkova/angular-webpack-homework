import { Component, OnInit, ViewContainerRef  } from '@angular/core';
import * as moment from 'moment';
import { Overlay } from 'ngx-modialog';

import { CourseService } from '../../core/services/course.service';
import { Course } from '../../shared/interfaces/course';
import { SearchPipe } from '../../shared/pipes/search.pipe';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],

})
export class CoursesComponent implements OnInit {
  allCourses: Course[] = [];
  isUpdating: boolean;
  countCourses: number;
  searchString: string;

  get noCourses() {
    return this.courseService.getAllCourses().length === 0;
  }

  constructor(private courseService: CourseService,
              public searchPipe: SearchPipe) {}

  ngOnInit() {
    this.allCourses = this.courseService.getAllCourses();
    if (this.allCourses) {
      this.countCourses = this.allCourses.length;
    } else {
      this.countCourses = 0;
    }
    this.isUpdating = false;
  }

  deleteCourse(id) {
    const isDelete = confirm('Do you really want to delete this course?');
    if (isDelete) {
      this.courseService.deleteCourse(id);
      if (this.countCourses > 1) {
        this.countCourses--;
      }
    }
  }

  updateCourse(id) {
    this.isUpdating = true;
  }

  find(str) {
    this.allCourses = this.searchPipe.transform(str);
  }
}
