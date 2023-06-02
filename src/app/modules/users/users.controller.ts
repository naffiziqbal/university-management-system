import { Request, Response } from 'express'
import { createUsertoDb, getUsersFromDb } from './user.services'

export const createUser = async (req: Request, res: Response) => {
  const data = req.body
  const user = createUsertoDb(data)
  res.send(user)
}

export const getUser = async (req: Request, res: Response) => {
  const users = await getUsersFromDb()
  res.status(200).json({
    status: 'Satisfied',
    data: users,
  })
}
