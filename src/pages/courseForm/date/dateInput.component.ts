import { Component, Input } from '@angular/core';

@Component({
    selector: 'date-input',
    templateUrl: './dateInput.component.html'
})
export class DateInputComponent {
    @Input() courseForm;
}