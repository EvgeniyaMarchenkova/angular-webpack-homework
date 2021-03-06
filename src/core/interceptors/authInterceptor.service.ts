import { HTTP_INTERCEPTORS, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {Injectable, Injector} from '@angular/core';
import {AuthorizationService} from '../services/authorization.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor( public injector: Injector ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const auth = this.injector.get(AuthorizationService);
        const authToken = auth.getAuthorizationToken();
        if (authToken) {
            const authReq = req.clone({
                headers: req.headers.set('Authorization', authToken)
            });
            return next.handle(authReq);
        }
        return next.handle(req);
    }
}