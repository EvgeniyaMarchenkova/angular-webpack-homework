import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthorizationService } from '../../services/authorization.service';
import { LoginComponent } from './login.component';
import { SharedModule } from "../../components/shared.module";

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
