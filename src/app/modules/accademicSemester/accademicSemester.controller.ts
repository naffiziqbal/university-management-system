import { NextFunction, Request, RequestHandler, Response } from 'express';
import {
  createAccademicSemesterToDb,
  deleteSemesterFromDb,
  getSemesterFromDb,
} from './accademicSemester.services';
import catchAsync from '../../../catchAsync';

// catchAsync is higherOrder Function to Handle Try Catch block

export const createAccademicSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const semester = req.body;
    const result = await createAccademicSemesterToDb(semester);
    next();

    res.status(200).json({
      status: 'Success',
      message: 'Semester Successfully Created',
      data: result,
    });
  }
);

export const getSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await getSemesterFromDb();
    next();
    res.status(200).json({
      status: 'Success',
      data: result,
    });
  }
);

// This is For Development Puspose to Handle Dababase Delatation by request rather than go to Database

export const deleteSemester: RequestHandler = async (req, res) => {
  const result = await deleteSemesterFromDb();
  res.status(200).json({
    status: 'Success',
    data: result,
    message: 'Database Deleted',
  });
};
