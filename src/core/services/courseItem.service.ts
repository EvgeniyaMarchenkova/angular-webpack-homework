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
    courseItemSubject = new BehaviorSubject<any>({
        id: null,
        name: '',
        date: null,
        length: 0,
        topRated: false,
        description: '',
        dateStr: '',
        authors: []
    });

    getCourseValue() {
        return this.courseItemSubject.asObservable();
    }

    setCourseValue(data) {
        this.courseItemSubject.next({
            id: data.id,
            name: data.name,
            date: data.date,
            length: data.length,
            topRated: false,
            description: data.description,
            dateStr: data.date.format('L'),
            authors: data.authors
        });
    }

    constructor() {}
}