import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
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
          'Content-Type':  'application/json',
          'Authorization': 'my-auth-token'
      })
      };
      const body = {
          login: username,
          password: password
      }
      return this.http.post(`http://localhost:3000/auth/login`, body, httpOptions).subscribe((token: string) => {
          this.token = token;
          localStorage.setItem('token', token);
      }, (err) => {
          console.log(err);
      });
  }

  logout() {
    localStorage.removeItem('token');
    this.token = null;
  }

  isLoggedIn() {
    return this.userData;
  }

  getAuthorizationToken() {
    return this.token || '58ebfdf7f1f558c5c86e17f6';
  }

  private userName() {
  }
}
