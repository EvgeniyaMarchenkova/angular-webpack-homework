import { Pipe, PipeTransform } from '@angular/core';
import { CourseService } from '../../core/services/course.service';

@Pipe({
  name: 'sortBySearch'
})
export class SearchPipe implements PipeTransform {
  constructor( public courseService: CourseService) {}

  transform(str: string) {
    if (str) {
      return this.courseService.getAllCourses().filter((task) => {
        return task.title.indexOf(str) > -1;
      });
    }
    return this.courseService.getAllCourses();
  }
}
