import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit} from '@angular/core';

import { Course } from '../../interfaces/course';
import { ChangeBorderDirective } from '../../../shared/directives/changeBorderDirective';
import { CourseService } from '../../../core/services/course.service';
import { Router } from '@angular/router';


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
              public router: Router) {}

    ngOnInit() {
        this.isUpdating = false;
    }

    delete(id) {
      this.idCourse.emit(id);
    }

    updateCourse(data) {
        this.isUpdating =  true;
        this.router.navigate(['/courses', data.id]);
    }
}
