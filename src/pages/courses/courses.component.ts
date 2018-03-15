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
  allCourses$: any;
  displayedCourses$: any;
  isUpdating: boolean;
  countCourses: number;
  searchString: string;
  allCourseseSubscription: Subscription;
  totalResults: number;
  countPages: number;
  currentPage = 1;
  isSearchResults = false;
  content = 'main';
  isCreating: boolean;

  get noCourses() {
    if (this.allCourses$) {
        return this.allCourses$.length === 0;
    }
  }

  constructor(private courseService: CourseService,
              public searchPipe: SearchPipe) {}

  ngOnInit() {
    this.getCourses(this.currentPage);
    this.isUpdating = false;
    this.isCreating = false;
    // this.isSearchResults = false;
  }

  getCourses(page) {
      this.allCourseseSubscription = this.courseService.getAllCourses(this.currentPage)
          .subscribe(
              (res) => {
                  this.allCourses$ = res.courses;
                  this.displayedCourses$ = res.courses;
                  this.totalResults = res.total;
              },
              (err) => {
                  this.countCourses = 0;
                  console.log('Error: ' + err);
              });
  }

  deleteCourse(id) {
    const isDelete = confirm('Do you really want to delete this course?');
    if (isDelete) {
      this.courseService.deleteCourse(id).subscribe((res) =>  {
        this.getCourses(this.currentPage);
      });
      if (this.countCourses > 0) {
        this.countCourses--;
      }
    }
  }

  updateCourse(id) {
    this.isUpdating = true;
  }

  find(str?) {
    if (!str) {
        this.isSearchResults = false;
        this.getCourses(1);
    } else {
        this.courseService.findCourse(str).subscribe( (res) => {
                this.displayedCourses$ = res;
            }
        );
        this.isSearchResults = true;
    }
  }


  ngOnDestroy() {
    this.allCourseseSubscription.unsubscribe();
  }

}
