import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'page-not-found',
    templateUrl: './pageNotFound.component.html'
})
export class PageNotFoundComponent {
    constructor( public router: Router) {}
}