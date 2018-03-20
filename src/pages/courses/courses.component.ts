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
import {Store} from '@ngrx/store';
import {AppState} from '../../shared/interfaces/store';
import {Router} from '@angular/router';

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
    error = false;

    get noCourses() {
        if (this.allCourses$) {
            return this.allCourses$.length === 0;
        }
    }

    constructor(private courseService: CourseService,
                public searchPipe: SearchPipe,
                private store: Store<AppState>,
                public router: Router) {
    }

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
            this.courseService.deleteCourse(id).subscribe((res) => {
                this.getCourses(this.currentPage);
            }, (err) => {
                this.error = true;
                console.log(err);
                window.scrollTo(0, 0);
            });
            if (this.countCourses > 0) {
                this.countCourses--;
            }
        }
    }

    updateCourse(data) {
        this.isUpdating = true;
        this.store.dispatch({type: 'courseState', payload: data});
        this.router.navigate(['/courses', data.id]);
    }

    find(str?) {
        if (!str) {
            this.isSearchResults = false;
            this.getCourses(1);
        } else {
            this.courseService.findCourse(str).subscribe((res) => {
                    this.displayedCourses$ = res;
                }
            );
            this.isSearchResults = true;
        }
    }

    loadPage(page) {
        this.currentPage = page;
        this.getCourses(page);
    }

    ngOnDestroy() {
        this.allCourseseSubscription.unsubscribe();
    }

}
