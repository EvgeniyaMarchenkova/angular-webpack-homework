import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Course } from '../../interfaces/course';


@Component({
    selector: 'course-form',
    templateUrl: 'courseForm.component.html',
    styleUrls: ['courseForm.component.scss']
})
export class CourseFormComponent {
    @Input() course: Course;
    constructor() {}

    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];

    // model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

    submitted = false;

    onSubmit() { this.submitted = true; }
}
