import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import * as moment from "moment";

const allCourses = [
  {
    id: 112,
    title: 'Testing PO',
    creatingDate: moment('2017-12-12T00:00:00-06:00'),
    duration: 880,
    topRated: true,
    description: 'The CFAA proctors D2L-based tests for ETSU courses by instructor request. Instructors can create their tests in D2L and then arrange with the Testing staff for their tests to be administered in the Center for students to take at any time Testing Services is open.'
  },
  {
    id: 22,
    title: 'Course Test Proctoring Services',
    creatingDate: moment('2018-01-01T00:00:00-06:00'),
    duration: 110,
    topRated: false,
    description: 'The CFAA proctors D2L-based tests for ETSU courses by instructor request. Instructors can create their tests in D2L and then arrange with the Testing staff for their tests to be administered in the Center for students to take at any time Testing Services is open.'
  },
  {
    id: 315,
    title: 'Requesting Test Proctoring',
    creatingDate: moment('2016-01-01T00:00:00-06:00'),
    duration: 300,
    topRated: false,
    description: 'The CFAA proctors D2L-based tests for ETSU courses by instructor request. Instructors can create their tests in D2L and then arrange with the Testing staff for their tests to be administered in the Center for students to take at any time Testing Services is open.'
  }

]

@Injectable()
export class CourseService {
  constructor() {}

  getAllCourses() {
    return allCourses;
  }

  findCourse(idCourse: number) {
    return _.find(allCourses, {id: idCourse});
  }

  createCourse(title, description, duration) {
    allCourses.push({id: moment() + title,
                    title: title,
                    creatingDate: moment(),
                    duration: duration,
                    topRated: false,
                    description: description})
  }

  updateCourse(id) {

  }

  deleteCourse(id) {
    const deletedCourseIndex = _.indexOf(allCourses, this.findCourse(id));
    allCourses.splice(deletedCourseIndex, 1);
  }
}
