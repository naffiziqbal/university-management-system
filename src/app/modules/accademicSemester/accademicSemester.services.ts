import httpStatus from 'http-status';
import ApiError from '../../../erros/apiErrors';
import { accademicSemesterTitlesCodeMapper } from './accademicSemester.constants';
import {
  IAccademicSemester,
  IGenericResponse,
  IPaginationType,
} from './accademicSemester.interface';
import { AccademicSemester } from './accademicSemester.model';

export const createAccademicSemesterToDb = async (
  payload: IAccademicSemester
) => {
  // Semester Code Validation
  if (accademicSemesterTitlesCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid Semester Code');
  }
  const result = await AccademicSemester.create(payload);
  return result;
};

export const getSemesterFromDb = async (
  paginationOptions: IPaginationType
): Promise<IGenericResponse<IAccademicSemester[]>> => {
  const { page = 1, limit = 10 } = paginationOptions;
  const skip = (page - 1) * limit;
  const result = await AccademicSemester.find().sort().skip(skip).limit(limit);

  const total = await AccademicSemester.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

export const deleteSemesterFromDb = async () => {
  const result = await AccademicSemester.deleteMany({});
  return result;
};
