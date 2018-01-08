import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Course } from '../../interfaces/course';
import { ChangeBorderDirective } from '../../../shared/directives/changeBorderDirective';


@Component({
  selector: 'item',
  providers: [ChangeBorderDirective],
  templateUrl: 'courseItem.component.html',
  styleUrls: ['courseItem.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent {
  @Input() data: Course;
  @Output() idCourse: EventEmitter<number> = new EventEmitter();

  constructor(public changeBorderDirective: ChangeBorderDirective) {}

  writeId(id) {
    this.idCourse.emit(id);
  }

}
