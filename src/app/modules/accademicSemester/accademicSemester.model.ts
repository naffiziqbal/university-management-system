import { Schema, model } from 'mongoose';
import {
  IAccademicSemester,
  IAccademicSemesterModel,
} from './accademicSemester.interface';

const AccademicSemesterSchema = new Schema<IAccademicSemester>({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  startMonth: {
    type: String,
    required: true,
  },
  endMonth: {
    type: String,
    required: true,
  },
});

export const AccademicSemester = model<
  IAccademicSemester,
  IAccademicSemesterModel
>('AccademicSemester', AccademicSemesterSchema);
