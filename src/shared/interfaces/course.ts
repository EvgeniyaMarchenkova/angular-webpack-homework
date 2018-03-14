import * as moment from 'moment';

export  interface Course {
  id: any;
  name: string;
  date: moment.Moment;
  length: number;
  topRated: boolean;
  description: string;
  dateStr: string;
  authors: any[];
}
