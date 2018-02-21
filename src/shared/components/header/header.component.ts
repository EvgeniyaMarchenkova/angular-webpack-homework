import {Component, OnInit, OnDestroy} from '@angular/core';

import { AuthorizationService } from '../../../core/services/authorization.service';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'education-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy{
  isAuthorizated = false;
  userName: any;
  token: string;
  userNameSubscription: Subscription;

  constructor(public authorizationService: AuthorizationService) {}

  ngOnInit() {
    this.isAuthorizated = this.authorizationService.isAuthorizated();
    this.getName();
  }

  login()  {
    this.authorizationService.login('Dale', 'consequat');
    this.isAuthorizated = true;
    this.getName();
  }

  logout() {
      this.authorizationService.logout();
      this.isAuthorizated = false;
  }

  getName() {
      // this.userName = this.authorizationService.getUserInfo();
      this.userNameSubscription = this.authorizationService.getUserInfo().subscribe((res: any) => {
          this.userName = res.name.first + ' ' + res.name.last;
          this.isAuthorizated = true;
      });
  }

  ngOnDestroy() {
      this.userNameSubscription.unsubscribe();
  }
}
