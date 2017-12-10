import { Component } from '@angular/core';

import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'education-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private authorizationService: AuthorizationService) {
    this.authorizationService.login('zhenya', 111);
  }
}
