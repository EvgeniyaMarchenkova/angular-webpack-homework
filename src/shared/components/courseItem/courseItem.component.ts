import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Course } from '../../interfaces/course';

@Component({
  selector: 'item',
  templateUrl: 'courseItem.component.html',
  styleUrls: ['courseItem.component.scss']
})
export class CourseItemComponent {
  @Input() data: Course;
  @Output() idCourse: EventEmitter<number> = new EventEmitter();

  constructor() {}

  writeId(id) {
    this.idCourse.emit(id);
  }

}
