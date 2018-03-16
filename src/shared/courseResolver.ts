import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Course} from './interfaces/course';
import {CourseService} from '../core/services/course.service';

@Injectable()
export class CourseResolver implements Resolve<any> {
    constructor(private courseService: CourseService) {}

    resolve(route: ActivatedRouteSnapshot) {
        return this.courseService.getCourse(route.paramMap.get('id'));
    }
}