import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'authors',
    templateUrl: './authors.component.html',
    styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent {
    @Input() allAuthors: any[];
    @Output() selectedAuthorsChange: EventEmitter<String> = new EventEmitter<String>();
    @Input() selectedAuthors: string;

}



