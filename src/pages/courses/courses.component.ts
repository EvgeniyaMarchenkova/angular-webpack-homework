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
  filteredCourses: Course[] = [];
  isUpdating: boolean;
  countCourses: number;
  searchString: string;
  allCourseseSubscription: Subscription;

  get noCourses() {
    return this.filteredCourses.length === 0;
  }

  constructor(private courseService: CourseService,
              public searchPipe: SearchPipe) {
  }

  ngOnInit() {
    this.allCourseseSubscription = this.courseService.getAllCourses()
      .subscribe(
        (res) => {
          this.allCourses$ = res;
          console.log(this.allCourses$);
          this.filteredCourses = res.filter(course => course.date.add(2, 'week').isAfter(moment()))
            .reduce((prevResult, x) => {
              prevResult.push(x);
              return prevResult;
            }, []);
        },
        (err) => {
          this.countCourses = 0;
          console.log('Error: ' + err);
        },
        () => {
          console.log('Completed');
        })
    ;
    // const latestCourseseSubscription = this.courseService.getAllCourses()
    //   .flatMap(course => course)
    //   .filter(course => course.date.add(2, 'week').isAfter(moment()))
    //   .reduce((prevResult, x) => {
    //     prevResult.push(x);
    //     return prevResult;
    //   }, [])
    //   .subscribe(
    //     (res) => {
    //       this.filteredCourses = res;
    //       this.countCourses = this.filteredCourses.length;
    //
    //
    //     },
    //     (err) => {
    //       this.countCourses = 0;
    //       console.log('Error: ' + err);
    //     },
    //     () => {
    //       console.log('Completed');
    //     })
    //
    // ;
    this.isUpdating = false;
  }

  deleteCourse(id) {
    const isDelete = confirm('Do you really want to delete this course?');
    if (isDelete) {
      this.courseService.deleteCourse(id);
      if (this.countCourses > 0) {
        this.countCourses--;
      }
    }
  }

  updateCourse(id) {
    this.isUpdating = true;
  }

  find(str?) {
    this.filteredCourses = this.searchPipe.transform(str, this.allCourses$);
  }

  ngOnDestroy() {
    this.allCourseseSubscription.unsubscribe();
  }
}
