import { RequestHandler } from 'express';
import {
  createAccademicSemesterToDb,
  getSemesterFromDb,
} from './accademicSemester.services';

export const createAccademicSemester: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const semester = req.body;
    const result = await createAccademicSemesterToDb(semester);
    res.status(200).json({
      status: 'Success',
      message: 'Semester Successfully Created',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const getSemester: RequestHandler = async (req, res, next) => {
  try {
    const result = await getSemesterFromDb();
    res.status(200).json({
      status: 'Success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
