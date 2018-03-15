import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ChangeBorderDirective } from './directives/changeBorderDirective';
import { CourseService } from '../core/services/course.service';
import { AuthorizationService } from '../core/services/authorization.service';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ToolboxComponent } from './components/toolbox/toolbox.component';
import { CourseItemComponent } from './components/courseItem/courseItem.component';
import { FormatDurationPipe } from './pipes/formatDuration.pipe';
import { OrderByDatePipe } from './pipes/orderByDate.pipe';
import { SearchPipe } from './pipes/search.pipe';
import {CourseFormModule} from '../pages/courseForm/courseForm.module';
import {CourseFormComponent} from '../pages/courseForm/main/courseForm.component';
import {BreadCrumb} from './interfaces/breadcrumb';
import {BreadcrumbComponent} from './components/breadcrumb/breadcrumb.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ToolboxComponent,
    CourseItemComponent,
    BreadcrumbComponent,
    ChangeBorderDirective,
    FormatDurationPipe,
    OrderByDatePipe,
    SearchPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CourseFormModule,
    RouterModule
  ],
  providers: [
    CourseService,
    AuthorizationService,
    SearchPipe
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ToolboxComponent,
    CourseItemComponent,
    OrderByDatePipe,
    CourseFormComponent,
    BreadcrumbComponent
  ]
})
export class SharedModule {}
