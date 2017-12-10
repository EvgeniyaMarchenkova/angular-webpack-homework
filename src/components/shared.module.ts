import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CourseService } from '../services/course.service';
import { AuthorizationService } from '../services/authorization.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { CourseItemComponent } from './courseItem/courseItem.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ToolboxComponent,
    CourseItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [CourseService, AuthorizationService],
  exports: [
    FooterComponent,
    HeaderComponent,
    ToolboxComponent,
    CourseItemComponent
  ]
})
export class SharedModule { }
