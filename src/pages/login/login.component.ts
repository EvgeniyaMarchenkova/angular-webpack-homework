import { Component, OnInit } from '@angular/core';

import { AuthorizationService } from '../../core/services/authorization.service';

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authorizationService: AuthorizationService) {}
}
