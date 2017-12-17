import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthorizationService } from '../../core/services/authorization.service';
import { LoginComponent } from './login.component';
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  providers: [AuthorizationService],
  exports: [
    LoginComponent
  ]
})
export class LoginModule {}
