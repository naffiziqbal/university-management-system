import { NextFunction, Request, Response } from 'express';
import { createUsertoDb, getUsersFromDb } from './user.services';
import { createUserZodSchema } from './user.validation';
import catchAsync from '../../../catchAsync';

export const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    await createUserZodSchema.parseAsync(req);
    const { user } = req.body;
    const result = await createUsertoDb(user);
    next();

    res?.status(200)?.json({
      Success: true,
      meassage: 'Data Created Successfully',
      data: result,
    });
  }
);

export const getUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const users = await getUsersFromDb();
    next();

    res.status(200).json({
      status: 'Satisfied',
      data: users,
    });
  }
);
