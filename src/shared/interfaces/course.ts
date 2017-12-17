import * as moment from 'moment';

export  interface Course {
  id: any;
  title: string;
  creatingDate: moment.Moment;
  duration: number;
  topRated: boolean,
  description: string;
}
