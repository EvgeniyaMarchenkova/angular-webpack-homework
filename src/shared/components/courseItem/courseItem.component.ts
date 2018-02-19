import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit} from '@angular/core';

import { Course } from '../../interfaces/course';
import { ChangeBorderDirective } from '../../../shared/directives/changeBorderDirective';


@Component({
  selector: 'item',
  providers: [ChangeBorderDirective],
  templateUrl: 'courseItem.component.html',
  styleUrls: ['courseItem.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit {
  @Input() data: Course;
  @Output() idCourse: EventEmitter<number> = new EventEmitter();
  isUpdating: boolean;

  constructor(public changeBorderDirective: ChangeBorderDirective) {}

    ngOnInit() {
        this.isUpdating = false;
    }

    writeId(id) {
      this.idCourse.emit(id);
    }

    updateCourse(id) {
        this.isUpdating = true;
    }
}
