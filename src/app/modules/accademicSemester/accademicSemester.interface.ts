import { Model } from 'mongoose';

export type IAccademicSemester = {
  title: string;
  year: number;
  code: string;
  startMonth: string;
  endMonth: string;
};

export type IAccademicSemesterModel = Model<IAccademicSemester, object>;
