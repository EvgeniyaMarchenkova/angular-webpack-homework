import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { CourseService } from '../../../core/services/course.service';

@Component({
  selector: 'toolbox',
  templateUrl: 'toolbox.component.html',
  styleUrls: ['toolbox.component.scss']
})
export class ToolboxComponent implements OnInit {
  isCreating: boolean;
  public findCourseString: string;
  private titleNewCourse: string;
  private descriptionNewCourse: string;
  private durationNewCourse: string;
  @Output() searchString: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
    this.isCreating = false;
  }

  constructor(private courseService: CourseService) {}

  resetForm() {
    this.titleNewCourse = '';
    this.descriptionNewCourse = '';
    this.durationNewCourse = '';
  }

  saveCourse() {
    this.courseService.createCourse(this.titleNewCourse, this.descriptionNewCourse, this.durationNewCourse)
      .subscribe(
        () => {
          this.resetForm();
          this.isCreating = false;
          console.log('lesson saved successfully');
        },
        console.error
      );
  }

  findCourses(searchString) {
    this.searchString.emit(searchString);
  }
}
