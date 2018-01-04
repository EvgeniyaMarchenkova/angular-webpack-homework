import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../interfaces/course';

@Pipe({
  name: 'orderByDate'
})
export class OrderByDatePipe implements PipeTransform {
  transform(arr: Course[]) {
    return arr.sort(function(a, b) {
      if (b.creatingDate.isBefore(a.creatingDate)) {
        return -1;
      } else if (a.creatingDate.isBefore(b.creatingDate)) {
        return 1;
      } else {
        return 0 ;
      }
    });
  }
}
