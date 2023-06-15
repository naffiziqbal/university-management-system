import { Schema, model } from 'mongoose';
import {
  IAccademicSemester,
  IAccademicSemesterModel,
} from './accademicSemester.interface';
import {
  accademicSemesterCode,
  accademicSemesterMonths,
  accademicSemesterTitles,
} from './accademicSemester.constants';

const AccademicSemesterSchema = new Schema<IAccademicSemester>({
  title: {
    type: String,
    required: true,
    enum: accademicSemesterTitles,
  },
  year: {
    type: Number,
    required: true,
  },
  code: {
    type: String,
    required: true,
    enum: accademicSemesterCode,
  },
  startMonth: {
    type: String,
    required: true,
    enum: accademicSemesterMonths,
  },
  endMonth: {
    type: String,
    required: true,
    enum: accademicSemesterMonths,
  },
});

export const AccademicSemester = model<
  IAccademicSemester,
  IAccademicSemesterModel
>('AccademicSemester', AccademicSemesterSchema);
