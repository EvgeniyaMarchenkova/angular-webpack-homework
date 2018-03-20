import * as moment from 'moment';
import {Author} from './author';

export  interface Course {
  id: any;
  name: string;
  date: moment.Moment;
  length: number;
  topRated: boolean;
  description: string;
  dateStr: string;
  authors: Author[];
}
