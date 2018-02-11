import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';

import { AuthorizationService } from '../../../core/services/authorization.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'education-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit{
  isLoggedIn: Observable<string>;
  userData: any;

  constructor(public authorizationService: AuthorizationService) {}

  ngOnInit() {
    this.isLoggedIn = this.authorizationService.isLoggedIn();
  }

  login(id)  {
    this.userData = this.authorizationService.getUser(id);
  }
}
