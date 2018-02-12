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
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class CourseService {
  allCourses: any;
  subj: any;
  source: any;

  constructor( public http: HttpClient) {}

  getAllCourses(): any {
    return this.http.get(`http://localhost:3000/courses`).map(courses => {
        _.forEach(courses, (item) =>  {
            item.date = moment(item.date);
            return item;
        }
      )
      return courses;
    });
  }

  findCourse(query) {
      const  httpOptions = {
          headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'my-auth-token'
          }),
          params: new HttpParams().set('name', query)
      };

      return this.http.get(`http://localhost:3000/courses`, httpOptions);
  }

  createCourse(title, description, duration) {
    const  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    const newCourse = {id: moment() + title,
                      title: title,
                      duration: duration,
                      topRated: false,
                      description: description,
                      date: moment().toString()};
    return this.http.post(`http://localhost:3000/courses`, JSON.stringify(newCourse), httpOptions);
  }

  updateCourse(id) {

  }

  deleteCourse(id) {
    const  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this.http.delete(`http://localhost:3000/courses/${id}`, httpOptions);
  }
}
