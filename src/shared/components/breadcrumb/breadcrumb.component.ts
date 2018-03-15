import { Component } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {BreadCrumb} from '../../interfaces/breadcrumb';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
    selector: 'breadcrumbs',
    templateUrl: 'breadcrumb.component.html'
})
export class BreadcrumbComponent {

    constructor(public router: Router,
                public activatedRoute: ActivatedRoute) {
    }

    breadcrumbs$ = this.router.events
        .filter(event => event instanceof NavigationEnd)
        .distinctUntilChanged()
        .map(event =>  this.buildBreadCrumb(this.activatedRoute.root));


    buildBreadCrumb(route: ActivatedRoute, url: string = '',
                    breadcrumbs: Array<BreadCrumb> = []): Array<BreadCrumb> {
        const label = route.routeConfig ? route.routeConfig.data[ 'breadcrumb' ] : 'Home';
        const path = route.routeConfig ? route.routeConfig.path : '';
        const nextUrl = `${url}${path}/`;
        const breadcrumb = {
            label: label,
            url: nextUrl
        };
        const newBreadcrumbs = [ ...breadcrumbs, breadcrumb ];
        if (route.firstChild) {
            return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
        }
        return newBreadcrumbs;
    }
}


