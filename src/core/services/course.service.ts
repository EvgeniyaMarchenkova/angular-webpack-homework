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
  totalCountCourses: number;


  constructor( public http: HttpClient) {
      this.allCourses = <BehaviorSubject<any>>new BehaviorSubject([]);
  }

  getAllCourses(page): any {
        return this.http.get(`http://localhost:3000/courses?_page=${page}`, { observe: 'response' }).map(res => {
            console.log(res);
            if (!this.totalCountCourses) {
                this.totalCountCourses = Number(res.headers.get('X-Total-Count'));
            }
            const courses = _.forEach(res.body, (item) =>  {
                    item.date = moment(item.date);
                    return item;
                }
            )
            return { total: this.totalCountCourses,
                     courses: courses };
        });
    }

    getCourse(id): any {
        return this.http.get(`http://localhost:3000/courses/${id}`).map(courses => {
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
              'Content-Type':  'application/json'
          }),
          params: new HttpParams().set('q', query)
      };

      return this.http.get(`http://localhost:3000/courses`, httpOptions);
  }

  createCourse(title, description, duration) {
    const  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
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
        'Content-Type':  'application/json'
      })
    };
    return this.http.delete(`http://localhost:3000/courses/${id}`, httpOptions);
  }
}
