import {AfterViewInit, Component, ElementRef, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { Course } from '../../../shared/interfaces/course';
import { CourseService } from '../../../core/services/course.service';
import {ActivatedRoute, Router} from '@angular/router';
import * as moment from 'moment';
import {INITIAL_STATE, Store} from '@ngrx/store';
import {AppState} from '../../../shared/interfaces/store';

@Component({
    selector: 'course-form',
    templateUrl: './courseForm.component.html',
    styleUrls: ['./courseForm.component.scss']
})
export class CourseFormComponent implements OnInit {
    @ViewChild('courseForm', {read: ElementRef}) courseForm: ElementRef;
    @ViewChild('durationInput') durationInput: any;
    @ViewChild('dateInput') dateInput: any;
    @ViewChild('authors') authors: any;

    course = {
        id: null,
        name: '',
        date: null,
        length: null,
        topRated: null,
        description: '',
        dateStr: '',
        authors: []
    };
    dateStr = '';

    error = false;
    success = false;

    constructor(public courseService: CourseService,
                private router: Router,
                public activatedRoute: ActivatedRoute,
                private store: Store<AppState>) {
        console.log(this.course.name);
    }


    ngOnInit() {

        // if (this.activatedRoute.snapshot.data['course']) {
        //     this.course = this.activatedRoute.snapshot.data['course'];
        // }
        this.store.select('courseState').subscribe((res) => {
            this.course = res;
        });
    }


    onSubmit(data) {
        if (!this.course.id) {
            this.course.id = moment();
        }
        this.course.name = data.title;
        this.course.description = data.description;
        this.course.length = this.durationInput.length;
        this.course.date = this.dateInput.dateStr;
        this.course.authors = this.authors.selectedAuthors;
        this.courseService.createCourse(this.course)
            .subscribe(
                () => {
                    this.success = true;
                    this.courseForm.nativeElement.reset();
                    window.scrollTo(0, 0);
                },
                (err) => {
                    this.error = true;
                    console.log(err);
                    window.scrollTo(0, 0);
                }
            );
    }

    closeForm() {
        this.courseForm.nativeElement.reset();
        this.store.dispatch({type: 'courseState', payload: INITIAL_STATE});
        this.router.navigate(['/courses']);
    }
}
