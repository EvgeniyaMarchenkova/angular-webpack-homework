import {Component} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {BreadCrumb} from '../../interfaces/breadcrumb';
import 'rxjs/add/operator/distinctUntilChanged';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'breadcrumbs',
    templateUrl: 'breadcrumb.component.html'
})
export class BreadcrumbComponent {

    breadcrumbs$: any;

    constructor(public router: Router,
                public activatedRoute: ActivatedRoute) {

        this.router.events
            .filter(event => event instanceof NavigationEnd)
            .distinctUntilChanged()
            .map(event => this.buildBreadCrumb(this.activatedRoute.root)).subscribe((res) => {
                this.breadcrumbs$ = res;
            });
    }

    buildBreadCrumb(route: ActivatedRoute, url: string = '',
                    breadcrumbs: Array<BreadCrumb> = []): Array<BreadCrumb> {
        let label;
        if (route.routeConfig) {
            if (route.routeConfig.data) {
                label = route.routeConfig.data['breadcrumb'];
            } else {
                label = route.snapshot.data['course']['name'];
            }
        } else {
            label = 'Home';
        }

        const path = route.routeConfig ? route.routeConfig.path : '';
        const nextUrl = `${url}${path}/`;
        const breadcrumb = {
            label: label,
            url: nextUrl,
            isClickable: false
        };
        const newBreadcrumbs = [...breadcrumbs, breadcrumb];
        if (route.firstChild) {
            newBreadcrumbs[0].isClickable = true;
            return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
        }
        return newBreadcrumbs;
    }
}


