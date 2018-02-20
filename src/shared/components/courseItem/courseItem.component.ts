import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit} from '@angular/core';

import { Course } from '../../interfaces/course';
import { ChangeBorderDirective } from '../../../shared/directives/changeBorderDirective';
import { CourseService } from '../../../core/services/course.service';


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

  constructor(public changeBorderDirective: ChangeBorderDirective,
              private courseService: CourseService) {}

    ngOnInit() {
        this.isUpdating = false;
    }

    writeId(id) {
      this.idCourse.emit(id);
    }

    updateCourse() {
        this.courseService.getCourse(this.data.id).subscribe((res) => {
          this.data = res;
          this.isUpdating = true;
        });
    }
}
