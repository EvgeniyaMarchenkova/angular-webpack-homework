import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBySearch'
})
export class SearchPipe implements PipeTransform {
  transform(allTasks: any[], str: string) {
    if (allTasks || str) {
      return allTasks.filter((task) => {
        return task.title.indexOf(str) > -1;
      });
    }
    return allTasks;
  }
}
