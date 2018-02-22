import * as moment from 'moment';

export  interface Course {
  id: any;
  name: string;
  date: moment.Moment;
  duration: number;
  topRated: boolean;
  description: string;
  startDate: string;
}
