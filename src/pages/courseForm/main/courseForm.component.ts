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

    onSubmit() {
        this.courseService.createCourse(this.title, this.description, this.duration)
            .subscribe(
                () => {
                    this.resetForm();
                    console.log('lesson saved successfully');
                },
                console.error
            );
    }

    resetForm() {
        this.title = '';
        this.duration = 0;
        this.description = '';
    }
}
