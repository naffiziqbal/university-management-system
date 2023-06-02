import { User } from './users.model'
import { IUser } from './users.interface'

export const createUsertoDb = async (user: IUser): Promise<IUser | null> => {
  const createUser = await User.create(user)
  if (!createUser) {
    throw new Error('Faild To Create an User')
  }
  return createUser
}

export const getUsersFromDb = () => {
  const users = User.find({})
  return users
}
