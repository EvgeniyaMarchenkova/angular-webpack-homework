import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {allAuthors} from './authors';
import {Author} from '../../../shared/interfaces/author';

@Component({
    selector: 'authors',
    templateUrl: './authors.component.html',
    styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit, OnDestroy{
    @Input() authors: Author[] = [];
    listAuthorsForView =  [];

    get selectedAuthors() {
        const list = [];
        this.listAuthorsForView.forEach((author) => {
            if (author.isChecked) {
                list.push({
                    id: author.id,
                    firstName: author.firstName,
                    lastName: author.lastName,
                });
            }
        });
        return list;
    }

    ngOnInit() {
        this.listAuthorsForView =  [];
        allAuthors.forEach((author, i) => {
            this.listAuthorsForView.push(author);
            this.authors.forEach((selectedAuthor) => {
                if (selectedAuthor.id === author.id) {
                    this.listAuthorsForView[i].isChecked = true;
                }
            });
        })
        console.log(this.authors);
    }

    ngOnDestroy() {
        this.listAuthorsForView =  [];
    }

}



