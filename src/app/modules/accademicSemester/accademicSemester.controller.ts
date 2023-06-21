import { NextFunction, Request, RequestHandler, Response } from 'express';
import {
  createAccademicSemesterToDb,
  deleteSemesterFromDb,
} from './accademicSemester.services';
import catchAsync from '../../../catchAsync';
import { IPaginationType } from './accademicSemester.interface';
import { pick } from '../../../pick';
import { paginationFields } from '../../../globalConstants/paginationConstance';

// catchAsync is higherOrder Function to Handle Try Catch block

export const createAccademicSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const semester = req.body;
    const result = await createAccademicSemesterToDb(semester);
    res.status(200).json({
      status: 'Success',
      message: 'Semester Successfully Created',
      data: result,
    });
    next();
  }
);

export const getSemesters = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // const paginationOptions = pick(req.query, paginationFields);
    // const result = await getSemesterFromDb(paginationOptions);
    // res.status(200).json({
    //   status: 'Success',
    //   data: result,
    // });
    // next();
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
