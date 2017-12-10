import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { CourseService } from '../../services/course.service';
import { Course } from '../../interfaces'

@Component({
  selector: 'courses-list',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{
  allCourses: Course[]=[];
  isDeleting: boolean;

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.allCourses = this.courseService.getAllCourses();
    this.isDeleting = false;
  }

  delete(id) {
    this.isDeleting = true;
    this.courseService.deleteCourse(id);
  }
}
