import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'date-input',
    templateUrl: './dateInput.component.html'
})
export class DateInputComponent implements OnInit{
    @Input() courseForm;
    @Input() dateStr: string;

    ngOnInit() {
    }
}