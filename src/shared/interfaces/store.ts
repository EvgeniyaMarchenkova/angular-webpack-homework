import {Course} from './course';

export interface AppState {
    // coursesListState: Course[];
    userState: string;
    courseState: Course;
}

export const INITIAL_COURSE_STATE = {
    id: null,
    name: '',
    length: 0,
    topRated: false,
    description: '',
    date: null,
    dateStr: '',
    authors: []
}

export const INITIAL_APPLICATION_STATE: AppState = {
    // coursesListState: [],
    userState: '',
    courseState: INITIAL_COURSE_STATE
};


