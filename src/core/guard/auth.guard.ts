import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {AuthorizationService} from '../services/authorization.service';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(public authorizationService: AuthorizationService, public router: Router) {}

    canActivate(): boolean {
        if (!this.authorizationService.isAuthorizated()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }

}