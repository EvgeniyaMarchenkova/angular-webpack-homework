import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { CourseService } from '../../../core/services/course.service';

@Component({
  selector: 'toolbox',
  templateUrl: 'toolbox.component.html',
  styleUrls: ['toolbox.component.scss']
})
export class ToolboxComponent implements OnInit {
  isCreating: boolean;
  private findCourseValue: string;
  private titleNewCourse: string;
  private descriptionNewCourse: string;
  private durationNewCourse: string;
  @Output() searchString: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
    this.findCourseValue = '';
    this.isCreating = false;
  }

  constructor(private courseService: CourseService) {}

  resetForm() {
    this.titleNewCourse = '';
    this.descriptionNewCourse = '';
    this.durationNewCourse = '';
  }

  saveCourse() {
    this.courseService.createCourse(this.titleNewCourse, this.descriptionNewCourse, this.durationNewCourse);
    this.resetForm();
    this.isCreating = false;
  }

  cancelCreating() {
    this.resetForm();
    this.isCreating = false;
  }

  findCourses(searchString) {
    this.searchString.emit(searchString);
  }
}
