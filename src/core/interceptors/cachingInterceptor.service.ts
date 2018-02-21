import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

@Injectable()
export class CachingInterceptor implements HttpInterceptor {

    constructor(private cache: RequestCache) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // if (!isCachable(req)) { return next.handle(req); }
        return next.handle(req);

        // const cachedResponse = this.cache.get(req);
        // return cachedResponse ?
        //     of(cachedResponse) : sendRequest(req, next, this.cache);
        //
        //
        // function sendRequest(request, nextHundler, cache): Observable<HttpEvent<any>> {
        //
        //     const noHeaderReq = request.clone({ headers: new HttpHeaders() });
        //
        //     return nextHundler.handle(noHeaderReq).pipe(
        //         tap(event => {
        //             if (event instanceof HttpResponse) {
        //                 cache.put(request, event); // Update the cache.
        //             }
        //         })
        //     );
        // }
    }


}