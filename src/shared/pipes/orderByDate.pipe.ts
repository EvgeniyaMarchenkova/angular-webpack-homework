import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../interfaces/course';

@Pipe({
  name: 'orderByDate'
})
export class OrderByDatePipe implements PipeTransform {
  transform(arr: Course[]) {
    return arr.sort(function(a, b) {
      if (b.date.isBefore(a.date)) {
        return -1;
      } else if (a.date.isBefore(b.date)) {
        return 1;
      } else {
        return 0 ;
      }
    });
  }
}
