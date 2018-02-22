import {NgModule} from '@angular/core';
import {CourseFormComponent} from './main/courseForm.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {DateInputComponent} from './date/dateInput.component';
import {DateValidator} from '../../shared/directives/dateValidator.directive';
import {DurationValidator} from '../../shared/directives/durationValidator.directive';
import {DurationInputComponent} from './duration/durationInput.component';

@NgModule({
    declarations: [
        CourseFormComponent,
        DateInputComponent,
        DurationInputComponent,
        DateValidator,
        DurationValidator
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule
    ],
    exports: [
        CourseFormComponent
    ]
})
export class CourseFormModule {}