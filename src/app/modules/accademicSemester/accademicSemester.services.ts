import httpStatus from 'http-status';
import ApiError from '../../../erros/apiErrors';
import { accademicSemesterTitlesCodeMapper } from './accademicSemester.constants';
import { IAccademicSemester } from './accademicSemester.interface';
import { AccademicSemester } from './accademicSemester.model';

export const createAccademicSemesterToDb = async (
  payload: IAccademicSemester
) => {
  if (accademicSemesterTitlesCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid Semester Code');
  }
  const result = await AccademicSemester.create(payload);
  return result;
};

export const getSemesterFromDb = async () => {
  const result = await AccademicSemester.find({});
  return result;
};

export const deleteSemesterFromDb = async () => {
  const result = await AccademicSemester.deleteMany({});
  return result;
};
