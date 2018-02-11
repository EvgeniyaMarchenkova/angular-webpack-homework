import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/do';
import {RequestOptions} from "@angular/http";

@Injectable()
export class AuthorizationService {
  isLoginSubject: Subject<string>;
  userData: any;

  constructor( public http: HttpClient ) {
  }

  getUser(id) {
      const  httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'my-auth-token'
      })
      };
      this.http.get(`http://localhost:3008/users/${id}`, httpOptions)
          .subscribe((res) => {
            this.userData = res;
            return res;
      });
  }

  logout() {
  }

  isLoggedIn() {
    return this.userData;
  }

  private userName() {
  }
}
