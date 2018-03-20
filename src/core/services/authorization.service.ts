import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders, HttpXhrBackend} from '@angular/common/http';
import 'rxjs/add/operator/do';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Store} from '@ngrx/store';
import {AppState} from '../../shared/interfaces/store';

@Injectable()
export class AuthorizationService extends HttpClient {
    // isLoginSubject = new BehaviorSubject<any>({
    //     first: '',
    //     last: ''
    // });
    userData: any;
    token: any;

    constructor(public http: HttpClient,
                public backend: HttpXhrBackend,
                private store: Store<AppState>) {
        super(backend);
    }

    login(username, password) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        const body = {
            login: username,
            password: password
        }
        return this.http.post(`http://localhost:3004/auth/login`, body, httpOptions).toPromise().then((token: any) => {
            this.token = token;
            localStorage.setItem('token', JSON.stringify(token.token));
            this.setUserInfo().subscribe();
        }, (err) => {
            console.log(err);
        });
    }

    logout() {
        localStorage.removeItem('token');
        this.store.dispatch({type: 'userState', payload: ''});
        this.token = null;
    }

    isAuthorizated() {
        return !!localStorage.getItem('token');
    }

    getAuthorizationToken() {
        return localStorage.getItem('token');
    }

    setUserInfo(): any {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(`http://localhost:3004/auth/userinfo`, null, httpOptions).map((res: any) => {
            // this.isLoginSubject.next(res.name);
            this.store.dispatch({type: 'userState', payload: res.name.first + '' + res.name.last});
        });
    }

    getUserInfo() {
        return this.store.select('userState');
        // return this.isLoginSubject.asObservable();
    }
}
