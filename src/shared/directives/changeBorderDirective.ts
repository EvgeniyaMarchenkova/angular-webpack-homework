import { Directive, Input, ElementRef } from '@angular/core';
import * as moment from 'moment';

@Directive({
  selector: '[xprsBackToPreviousPage]'
})
export class changeBorderDirective {
  @Input('changeBorderDirective') creatingDate: moment.Moment;

  constructor(el: ElementRef) {
    if (this.creatingDate > Date()) {
      el.nativeElement.style.backgroundColor = 'yellow';
    }
    else  {
      el.nativeElement.style.backgroundColor = 'green';
    }

  }
}
