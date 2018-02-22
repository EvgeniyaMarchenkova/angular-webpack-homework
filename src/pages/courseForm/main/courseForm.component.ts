import { Component, Input } from '@angular/core';
import { Course } from '../../../shared/interfaces/course';
import { CourseService } from '../../../core/services/course.service';

@Component({
    selector: 'course-form',
    templateUrl: './courseForm.component.html',
    styleUrls: ['./courseForm.component.scss']
})
export class CourseFormComponent {
    @Input() course: Course;
    title: string;
    duration: number;
    description: string;
    constructor(private courseService: CourseService) {}

    onSubmit(data) {
        this.courseService.createCourse(data.title, data.description, data.duration, data.date)
            .subscribe(
                () => {
                    console.log('lesson saved successfully');
                },
                console.error
            );
    }
}
