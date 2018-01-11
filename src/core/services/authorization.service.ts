import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import * as moment from 'moment';
import {Subject} from 'rxjs/Subject';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthorizationService {
  isLoginSubject: Subject<string>;

  constructor() {
    this.isLoginSubject = new ReplaySubject(null);
  }

  login(username, password) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    this.isLoginSubject.next(username);
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    this.isLoginSubject.next(null);
  }

  isLoggedIn(): Observable<string> {
    return this.isLoginSubject.asObservable();
  }
}
