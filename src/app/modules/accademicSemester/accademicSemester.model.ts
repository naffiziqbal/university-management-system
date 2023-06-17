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
import ApiError from '../../../erros/apiErrors';
import status from 'http-status';

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
AccademicSemesterSchema.pre('save', async function (next) {
  const isExist = await AccademicSemester.findOne({
    title: this.title,
    year: this.year,
  });
  if (isExist) {
    //Using Http-status Package
    throw new ApiError(status.CONFLICT, 'Duplicate Data Input');
  }
  next(); // Next Hook From Mongoose
});

export const AccademicSemester = model<
  IAccademicSemester,
  IAccademicSemesterModel
>('AccademicSemester', AccademicSemesterSchema);
