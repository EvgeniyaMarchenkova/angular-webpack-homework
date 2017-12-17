import { Directive, Input, ElementRef } from '@angular/core';
import * as moment from 'moment';

@Directive({
  selector: '[changeBorderDirective]'
})
export class ChangeBorderDirective {
  @Input('changeBorderDirective') creatingDate: moment.Moment;

  constructor(el: ElementRef) {
    if (this.creatingDate.isBefore(moment(new Date()))) {
      el.nativeElement.style.backgroundColor = 'yellow';
    }
    else  {
      el.nativeElement.style.backgroundColor = 'green';
    }

  }
}
