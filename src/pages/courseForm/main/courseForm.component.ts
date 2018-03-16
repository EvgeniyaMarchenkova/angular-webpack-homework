import {AfterViewInit, Component, ElementRef, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { Course } from '../../../shared/interfaces/course';
import { CourseService } from '../../../core/services/course.service';
import {ActivatedRoute, Router} from '@angular/router';
import * as moment from 'moment';

@Component({
    selector: 'course-form',
    templateUrl: './courseForm.component.html',
    styleUrls: ['./courseForm.component.scss']
})
export class CourseFormComponent implements OnInit, AfterViewInit {
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
                public activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        if (this.activatedRoute.snapshot.data['course']) {
            this.course = this.activatedRoute.snapshot.data['course'];
        }
    }

    ngAfterViewInit() {
        // if (this.course.id) {
        //     this.courseForm.nativeElement.value = this.course;
        // }

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
        this.router.navigate(['/courses']);
    }
}
