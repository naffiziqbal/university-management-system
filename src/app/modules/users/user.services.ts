import { User } from './users.model'
import { IUser } from './users.interface'
import config from '../../../config'
import { generateUserId } from './users.utils'

export const createUsertoDb = async (user: IUser): Promise<IUser | null> => {
  // ** Auto Generated Incremental  Id**//
  const id = await generateUserId()
  user.id = id
  console.log(user.id)
  //  ** Default Password **//

  if (!user.password) {
    user.password = config.default_user_pass as string
  }
  console.log(user)
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
