import { Pipe, PipeTransform } from '@angular/core';
import { CourseService } from '../../core/services/course.service';

@Pipe({
  name: 'sortBySearch'
})
export class SearchPipe implements PipeTransform {
  constructor( public courseService: CourseService) {}

  transform(str: string, allCourses) {
    let filteredArr = [];
    this.courseService.getAllCourses(1).subscribe(
      (res) => {
        if (str) {
          filteredArr = res.filter((task) => {
            return task.title.toLowerCase().indexOf(str.toLowerCase()) > -1;
          });
        } else {
          filteredArr = res;
        }
      },
      (err) => {
        console.log('Error: ' + err);
      });
    return filteredArr;
  }

}
