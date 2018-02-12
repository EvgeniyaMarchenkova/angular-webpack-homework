import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import * as moment from 'moment';
import {Overlay} from 'ngx-modialog';

import {CourseService} from '../../core/services/course.service';
import {Course} from '../../shared/interfaces/course';
import {SearchPipe} from '../../shared/pipes/search.pipe';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, OnDestroy {
  allCourses$: Course[] = [];
  filteredCourses$: any;
  isUpdating: boolean;
  countCourses: number;
  searchString: string;
  allCourseseSubscription: Subscription;

  get noCourses() {
    return this.allCourses$.length === 0;
  }

  constructor(private courseService: CourseService,
              public searchPipe: SearchPipe) {
  }

  ngOnInit() {
    this.allCourseseSubscription = this.courseService.getAllCourses()
      .subscribe(
        (res) => {
          this.allCourses$ = res;
          this.filteredCourses$ = res.filter(course => course.date.add(2, 'week').isAfter(moment()));
        },
        (err) => {
          this.countCourses = 0;
          console.log('Error: ' + err);
        },
        () => {
          console.log('Completed');
        })
    ;
    this.isUpdating = false;
  }

  deleteCourse(id) {
    const isDelete = confirm('Do you really want to delete this course?');
    if (isDelete) {
      this.courseService.deleteCourse(id).subscribe();
      if (this.countCourses > 0) {
        this.countCourses--;
      }
    }
  }

  updateCourse(id) {
    this.isUpdating = true;
  }

  find(str?) {
    this.courseService.findCourse(str || '').subscribe((res) => this.filteredCourses$ = res);
    console.log(this.filteredCourses$);
  }

  ngOnDestroy() {
    this.allCourseseSubscription.unsubscribe();
  }
}
