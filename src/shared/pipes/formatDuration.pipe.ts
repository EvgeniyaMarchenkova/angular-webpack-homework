import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDuration'
})
export class FormatDurationPipe implements PipeTransform {
  transform(durationMins: number) {
    const h = durationMins / 60 | 0,
          m = durationMins % 60 | 0;
    return h + 'h ' + m + 'min ';
  }
}
