import { IAccademicSemester } from './accademicSemester.interface';
import { AccademicSemester } from './accademicSemester.model';

export const createAccademicSemesterToDb = async (
  payload: IAccademicSemester
) => {
  const result = await AccademicSemester.create(payload);
  return result;
};
