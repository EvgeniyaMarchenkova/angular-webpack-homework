import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from '../core/services/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public authorizationService: AuthorizationService){}

  ngOnInit() {
      if (this.authorizationService.isAuthorizated()) {
          this.authorizationService.setUserInfo().subscribe();
      }
  }

}
