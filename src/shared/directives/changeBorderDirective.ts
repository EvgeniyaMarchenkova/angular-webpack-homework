import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import * as moment from 'moment';

@Directive({
  selector: '[changeBorderDirective]'
})
export class ChangeBorderDirective implements OnInit {
  @Input('changeBorderDirective') date: moment.Moment;

  constructor(protected el: ElementRef) {}

  ngOnInit() {
    const currentDate = moment(Date());
    if (this.date.isBefore(currentDate)) {
      const dateAddTwoWeeks = this.date.add(2, 'week');
      if (dateAddTwoWeeks.isAfter(currentDate)) {
        this.el.nativeElement.style.border = '2px solid darkgreen';
      }
    } else  {
      this.el.nativeElement.style.border = '2px solid darkblue';
    }

  }
}
