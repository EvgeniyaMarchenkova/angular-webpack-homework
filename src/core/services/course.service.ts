import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import * as moment from 'moment';
import {Observable, ObservableInput} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


const allCourses = [
  {
    id: 112,
    title: 'Testing',
    startDate: '2018-02-12T00:00:00-06:00',
    duration: 880,
    topRated: true,
    description: 'The CFAA proctors D2L-based tests for ETSU courses by instructor request. Instructors can create their tests in D2L and then arrange with the Testing staff for their tests to be administered in the Center for students to take at any time Testing Services is open.',
    date: null
  },
  {
    id: 22,
    title: 'Test Proctoring Services',
    startDate: '2018-01-11T00:00:00-06:00',
    duration: 110,
    topRated: false,
    description: 'The CFAA proctors D2L-based tests for ETSU courses by instructor request. Instructors can create their tests in D2L and then arrange with the Testing staff for their tests to be administered in the Center for students to take at any time Testing Services is open.',
    date: null
  },
  {
    id: 315,
    title: 'Requesting Proctoring',
    startDate: '2016-01-01T00:00:00-06:00',
    duration: 300,
    topRated: false,
    description: 'The CFAA proctors D2L-based tests for ETSU courses by instructor request. Instructors can create their tests in D2L and then arrange with the Testing staff for their tests to be administered in the Center for students to take at any time Testing Services is open.',
    date: null
  }
]

@Injectable()
export class CourseService {
  allCourses: any;
  subj: any;
  source: any;

  constructor() {
    this.subj = new BehaviorSubject(Observable.of(allCourses));
  }

  getAllCourses(): Observable<any> {
    // this.subj =  Observable.of(allCourses)
    //       .flatMap(course => course)
    //       .map(course => {
    //         course.date = moment(course.startDate);
    //         return course;
    //         })
    //       .reduce( (prevResult, x) => {
    //         prevResult.push(x);
    //         return prevResult;
    //       }, []);
    Observable.of([
        {
            id: 112,
            title: 'Testing',
            startDate: '2018-02-12T00:00:00-06:00',
            duration: 880,
            topRated: true,
            description: 'The CFAA proctors D2L-based tests for ETSU courses by instructor request. Instructors can create their tests in D2L and then arrange with the Testing staff for their tests to be administered in the Center for students to take at any time Testing Services is open.',
            date: null
        },
        {
            id: 22,
            title: 'Test Proctoring Services',
            startDate: '2018-01-11T00:00:00-06:00',
            duration: 110,
            topRated: false,
            description: 'The CFAA proctors D2L-based tests for ETSU courses by instructor request. Instructors can create their tests in D2L and then arrange with the Testing staff for their tests to be administered in the Center for students to take at any time Testing Services is open.',
            date: null
        },
        {
            id: 315,
            title: 'Requesting Proctoring',
            startDate: '2016-01-01T00:00:00-06:00',
            duration: 300,
            topRated: false,
            description: 'The CFAA proctors D2L-based tests for ETSU courses by instructor request. Instructors can create their tests in D2L and then arrange with the Testing staff for their tests to be administered in the Center for students to take at any time Testing Services is open.',
            date: null
        }
    ]).map (val => console.log(val));
    return this.subj.asObservable().map(course => {
      console.log(course);
        course.date = moment(course.startDate);
        return course;
    });
  }

  findCourse(idCourse: number) {
    return _.find(allCourses, {id: idCourse});
  }

  createCourse(title, description, duration) {
    allCourses.push({id: moment() + title,
                    title: title,
                    startDate: moment().toString(),
                    duration: duration,
                    topRated: false,
                    description: description,
                    date: null});
  }

  updateCourse(id) {

  }

  deleteCourse(id) {
    const deletedCourseIndex = _.indexOf(allCourses, this.findCourse(id));
    allCourses.splice(deletedCourseIndex, 1);
    this.subj.next(allCourses);
  }
}
