import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Course } from '../../interfaces';

@Component({
  selector: 'item',
  templateUrl: './courseItem.component.html',
  styleUrls: ['./courseItem.component.scss']
})
export class CourseItemComponent {
  @Input() data: Course;
  @Output() onWriten: EventEmitter<number> = new EventEmitter();

  constructor() {}

  writeId(id) {
    console.log(id)
  }

}
