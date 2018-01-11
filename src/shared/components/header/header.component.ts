import { Component, ChangeDetectionStrategy } from '@angular/core';

import { AuthorizationService } from '../../../core/services/authorization.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'education-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent {
  isLoggedIn: Observable<string>;

  constructor(public authorizationService: AuthorizationService) {
    this.isLoggedIn = this.authorizationService.isLoggedIn();
  }
}
