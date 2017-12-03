import { Component } from '@angular/core';
import * as moment from 'moment';

interface Course {
  id: number;
  title: string;
  creatingDate: moment.Moment;
  duration: number;
  description: string;
}

@Component({
  selector: 'courses-list',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  title = 'app';
}
