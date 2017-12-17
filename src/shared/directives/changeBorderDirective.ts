import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import * as moment from 'moment';

@Directive({
  selector: '[changeBorderDirective]'
})
export class ChangeBorderDirective implements OnInit {
  @Input('changeBorderDirective') creatingDate: moment.Moment;

  constructor(protected el: ElementRef) {}

  ngOnInit() {
    const currentDate = moment(Date());
    if (this.creatingDate.isBefore(currentDate)) {
      const creatingDatetAddTwoWeeks = this.creatingDate.add(2, 'week');
      if (creatingDatetAddTwoWeeks.isAfter(currentDate)) {
        this.el.nativeElement.style.border = '2px solid darkgreen';
      }
    }
    else  {
      this.el.nativeElement.style.border = '2px solid darkblue';
    }

  }
}
