import {NgModule} from '@angular/core';
import {CourseFormComponent} from './main/courseForm.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {DateInputComponent} from './date/dateInput.component';

@NgModule({
    declarations: [
        CourseFormComponent,
        DateInputComponent
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