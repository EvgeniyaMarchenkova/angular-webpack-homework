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
  public token: string;

  constructor( public http: HttpClient,
               public backend: HttpXhrBackend) {
      super(backend);
  }

  getUser(id) {
      const  httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'my-auth-token'
      })
      };
      return this.http.get(`http://localhost:3008/users/${id}`, httpOptions);
  }

  logout() {
  }

  isLoggedIn() {
    return this.userData;
  }

  private userName() {
  }
}
