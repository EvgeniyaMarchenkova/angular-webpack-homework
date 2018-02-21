import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import * as localforage from 'localforage';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpXhrBackend} from '@angular/common/http';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthorizationService extends HttpClient {
  isLoginSubject: Subject<string>;
  userData: any;
  token: any;

  constructor( public http: HttpClient,
               public backend: HttpXhrBackend) {
      super(backend);
  }

  login(username, password) {
      const  httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
      })
      };
      const body = {
          login: username,
          password: password
      }
      return this.http.post(`http://localhost:3004/auth/login`, body, httpOptions).subscribe((token: any) => {
          this.token = token;
          localStorage.setItem('token', JSON.stringify(token.token));
          this.getUserInfo();
      }, (err) => {
          console.log(err);
      });
  }

  logout() {
    localStorage.removeItem('token');
    this.token = null;
  }

  isAuthorizated() {
    return !!localStorage.getItem('token');
  }

  getAuthorizationToken() {
    return localStorage.getItem('token');
  }

  getUserInfo() {
    const  httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
    };
    return this.http.post(`http://localhost:3004/auth/userinfo`, null, httpOptions);
  }
}
