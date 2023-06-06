import { User } from './users.model'
import { IUser } from './users.interface'
import config from '../../../config'
import { generateUserId } from './users.utils'
import ApiError from '../../../erros/apiErrors'

export const createUsertoDb = async (user: IUser): Promise<IUser | null> => {
  // ** Auto Generated Incremental  Id**//
  const id = await generateUserId()
  user.id = id
  //  ** Default Password **//

  if (!user.password) {
    user.password = config.default_user_pass as string
  }
  const createUser = await User.create(user)
  if (!createUser) {
    throw new ApiError(400, 'Faild To Create an User')
  }
  return createUser
}

export const getUsersFromDb = () => {
  const users = User.find({})
  return users
}
