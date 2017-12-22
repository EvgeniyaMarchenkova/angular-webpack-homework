import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBySearch'
})
export class SearchPipe implements PipeTransform {
  transform(allTasks: any[], status: string) {
    if (!allTasks || !status)
    {
      return allTasks
    }

    return allTasks.filter((task) => task.status === status);
  }
}
