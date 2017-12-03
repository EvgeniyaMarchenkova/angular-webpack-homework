import { Component, Input } from '@angular/core';

import { Course } from '../../interfaces';

@Component({
  selector: 'item',
  templateUrl: './courseItem.component.html',
  styleUrls: ['./courseItem.component.scss']
})
export class CourseItemComponent {
  @Input() data: Course;

  constructor() {}

}
