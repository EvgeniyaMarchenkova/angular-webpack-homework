import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'duration-input',
    templateUrl: './durationInput.component.html'
})
export class DurationInputComponent{
    @Input() courseForm: any;
    @Input() length: string;
    // @Output() lengthChange = new EventEmitter();

}