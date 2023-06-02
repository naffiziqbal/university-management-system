import { Request, Response } from 'express'
import { createUsertoDb, getUsersFromDb } from './user.services'

export const createUser = async (req: Request, res: Response) => {
  const { user } = req.body
  console.log('User', user)
  const result = createUsertoDb(user)
  res.status(200).json({
    Success: true,
    data: result,
  })
}

export const getUser = async (req: Request, res: Response) => {
  const users = await getUsersFromDb()
  res.status(200).json({
    status: 'Satisfied',
    data: users,
  })
}
