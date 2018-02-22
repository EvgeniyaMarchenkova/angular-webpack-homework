import { Component, Input } from '@angular/core';

@Component({
    selector: 'duration-input',
    templateUrl: './durationInput.component.html'
})
export class DurationInputComponent {
    @Input() courseForm;
}