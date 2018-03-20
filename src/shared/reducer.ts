import { ActionReducer, Action } from '@ngrx/store';
import {AppState, INITIAL_APPLICATION_STATE, INITIAL_COURSE_STATE} from './interfaces/store';
import {Course} from './interfaces/course';



// export function storeReducer(state: AppState = INITIAL_APPLICATION_STATE, action: Action): AppState {
//     return {
//         userState: userState(state.userState, action),
//         courseState: courseState(state.courseState, action),
//         coursesListState: coursesListState(state.coursesListState, action)
//     };
// }

export function userState(state: string, action: any) {
    switch (action.type) {
        case 'userState':
            return action.payload
        default:
            return state;
    }
}

export function courseState(state: Course = INITIAL_COURSE_STATE, action: any) {
    switch (action.type) {
        case 'courseState':
            return action.payload
        default:
            return state;
    }
}

export function coursesListState(state: Course[] = [], action: any) {
    switch (action.type) {
        case 'coursesListState':
            return action.payload;
        default:
            return state;
    }
}

