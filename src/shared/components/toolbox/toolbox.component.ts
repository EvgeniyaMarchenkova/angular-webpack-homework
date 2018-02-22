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
  @Output() searchString: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
    this.isCreating = false;
  }

  constructor(private courseService: CourseService) {}

  findCourses(searchString) {
    this.searchString.emit(searchString);
  }
}
