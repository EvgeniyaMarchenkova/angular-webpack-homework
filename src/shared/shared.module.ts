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

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ToolboxComponent,
    CourseItemComponent,
    ChangeBorderDirective,
    FormatDurationPipe,
    OrderByDatePipe,
    SearchPipe
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
export class SharedModule {}
