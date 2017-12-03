import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { allCourses } from './dataCourses';
import { Course } from '../../interfaces'

@Component({
  selector: 'courses-list',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{
  allCourses: Course[]=[];

  ngOnInit() {
    this.allCourses = allCourses;
  }
}
