import { RequestHandler } from 'express';
import { createUsertoDb, getUsersFromDb } from './user.services';
import { createUserZodSchema } from './user.validation';

export const createUser: RequestHandler = async (req, res, next) => {
  try {
    await createUserZodSchema.parseAsync(req);
    const { user } = req.body;
    const result = await createUsertoDb(user);
    res?.status(200)?.json({
      Success: true,
      meassage: 'Data Created Successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const getUser: RequestHandler = async (req, res) => {
  const users = await getUsersFromDb();
  res.status(200).json({
    status: 'Satisfied',
    data: users,
  });
};
