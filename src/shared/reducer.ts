import { ActionReducer, Action } from '@ngrx/store';
import {AppState, INITIAL_APPLICATION_STATE, INITIAL_COURSE_STATE} from './interfaces/store';
import {Course} from './interfaces/course';

export function userState(state: string, action) {
    switch (action.type) {
        case 'userState':
            return action.payload;
        default:
            return state;
    }
}

export function courseState(state: Course = INITIAL_COURSE_STATE, action) {
    switch (action.type) {
        case 'courseState':
            return action.payload;
        default:
            return state;
    }
}

export function coursesListState(state: Course[] = [], action) {
    switch (action.type) {
        case 'coursesListState':
            return action.payload;
        default:
            return state;
    }
}

