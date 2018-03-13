import { Injectable } from '@angular/core';
import {Observable, ObservableInput} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Course} from '../../shared/interfaces/course';

@Injectable()
export class CourseItemService {
    courseItem = new BehaviorSubject<Course>({
        id: null,
        name: '',
        date: null,
        duration: 0,
        topRated: false,
        description: '',
        startDate: ''
    });

    getCourseValue() {
        return this.courseItem.asObservable();
    }

    setCourseValue(data) {
        this.courseItem.next({
            id: data.id,
            name: data.name,
            date: data.date,
            duration: data.duration,
            topRated: false,
            description: data.description,
            startDate: null
        });
    }

    constructor() {}
}