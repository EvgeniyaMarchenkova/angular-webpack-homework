import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { Course } from '../../../shared/interfaces/course';
import { CourseService } from '../../../core/services/course.service';
import {CourseItemService} from '../../../core/services/courseItem.service';
import {Router} from '@angular/router';

const allAuthors = [
    {
        id: 5508,
        firstName: "Patsy",
        lastName: "Bright"
    },
    {
        id: 8413,
        firstName: "Greta",
        lastName: "Richardson"
    },
    {
        id: 7458,
        firstName: "Deana",
        lastName: "Bruce"
    },
    {
        id: 3618,
        firstName: "Laura",
        lastName: "Kirby"
    },
    {
        id: 9064,
        firstName: "Quinn",
        lastName: "Cain"
    },
    {
        id: 9926,
        firstName: "Burt",
        lastName: "Holland"
    },
    {
        id: 6440,
        firstName: "Andrews",
        lastName: "Byers"
    },
    {
        id: 8509,
        firstName: "Shawn",
        lastName: "Craig"
    },
    {
        id: 21,
        firstName: "Maddox",
        lastName: "Diaz"
    },
    {
        id: 800,
        firstName: "Glenda",
        lastName: "Juarez"
    },
    {
        id: 1772,
        firstName: "Hilda",
        lastName: "Gaines"
    },
    {
        id: 3003,
        firstName: "Abbott",
        lastName: "Mckay"
    }
]

@Component({
    selector: 'course-form',
    templateUrl: './courseForm.component.html',
    styleUrls: ['./courseForm.component.scss']
})
export class CourseFormComponent implements OnInit, AfterViewInit {
    @ViewChild('courseForm', {read: ElementRef}) courseForm: ElementRef;
    @Input() course: Course;

    allAuthors = allAuthors;
    duration: number;
    description: string;
    error = false;
    success = false;

    constructor(public courseService: CourseService,
                public courseItemService: CourseItemService,
                private router: Router) {}

    ngOnInit() {
        console.log(this.course);
    }

    ngAfterViewInit() {
        if (this.course) {
            this.courseItemService.getCourseValue().subscribe((res) => {
                this.courseForm.nativeElement.title.value = res.name;
            });
        }
    }

    onSubmit(data) {
        if (this.courseForm.nativeElement.valid) {
            console.log("Form Submitted!");
        }
        this.courseService.createCourse(data.title, data.description, data.duration, data.date)
            .subscribe(
                () => {
                    this.success = true;
                    this.courseForm.nativeElement.reset();
                    window.scrollTo(0, 0);
                },
                (err) => {
                    this.error = true;
                    console.log(err);
                }
            );
    }
}
