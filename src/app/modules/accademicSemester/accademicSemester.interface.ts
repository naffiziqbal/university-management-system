import { Model } from 'mongoose';

export type IAccademicSemesterMonths =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type IAccademicSemesterTitles = 'Autumn' | 'Summer' | 'Fall';
export type IAccademicSemesterCode = '01' | '02' | '03';
export type IAccademicSemester = {
  title: IAccademicSemesterTitles;
  year: number;
  code: IAccademicSemesterCode;
  startMonth: IAccademicSemesterMonths;
  endMonth: IAccademicSemesterMonths;
};

export type IAccademicSemesterModel = Model<IAccademicSemester, object>;

export type IPaginationType = {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
};
