import {
  IAccademicSemesterCode,
  IAccademicSemesterMonths,
  IAccademicSemesterTitles,
} from './accademicSemester.interface';

export const accademicSemesterMonths: IAccademicSemesterMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const accademicSemesterCode: IAccademicSemesterCode[] = [
  '01',
  '02',
  '03',
];
export const accademicSemesterTitles: IAccademicSemesterTitles[] = [
  'Autumn',
  'Summer',
  'Fall',
];

export const accademicSemesterTitlesCodeMapper: {
  [key: string]: string;
} = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
};
