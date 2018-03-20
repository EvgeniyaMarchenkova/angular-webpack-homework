import {Component, OnInit, OnDestroy} from '@angular/core';

import {AuthorizationService} from '../../../core/services/authorization.service';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {Router} from '@angular/router';

@Component({
    selector: 'education-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
    isAuthorizated = false;
    userName: any;
    userNameSubscription: Subscription;

    constructor(public authorizationService: AuthorizationService,
                public router: Router) {
    }

    ngOnInit() {
        this.isAuthorizated = this.authorizationService.isAuthorizated();
        this.getName();
    }

    login() {
        this.router.navigate(['/login']);
    }

    logout() {
        this.authorizationService.logout();
        this.isAuthorizated = false;
    }

    getName() {
        this.authorizationService.getUserInfo().subscribe((res: any) => {
            if (res) {
                this.userName = res;
                this.isAuthorizated = true;
                this.router.navigate(['/courses']);
            }
        });
        // this.userNameSubscription = this.authorizationService.getUserInfo().subscribe((res: any) => {
        //     if (res) {
        //         this.userName =  res.first + ' ' + res.last;
        //         this.isAuthorizated = true;
        //         this.router.navigate(['/courses']);
        //     }
        // });
    }

    ngOnDestroy() {
        // this.userNameSubscription.unsubscribe();
    }
}
