import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import * as moment from "moment";

@Injectable()
export class AuthorizationService {
  isAuthenticated: boolean = false;
  constructor() {}

  login(username, password) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    this.isAuthenticated = true;
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    this.isAuthenticated = false;
  }

  get userInfo() {
    return {login: localStorage.getItem('username'), password: localStorage.getItem('password')};
  }
}
