import { NextFunction, Request, Response } from 'express'
import { createUsertoDb, getUsersFromDb } from './user.services'

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { user } = req.body
    const result = await createUsertoDb(user)
    res.status(200).json({
      Success: true,
      meassage: 'Data Created Successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

export const getUser = async (req: Request, res: Response) => {
  const users = await getUsersFromDb()
  res.status(200).json({
    status: 'Satisfied',
    data: users,
  })
}
