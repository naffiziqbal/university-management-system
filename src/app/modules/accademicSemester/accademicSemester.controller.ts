import { RequestHandler } from 'express';
import { createAccademicSemesterToDb } from './accademicSemester.services';

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
