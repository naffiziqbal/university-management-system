import { Model } from 'mongoose'

export type IUser = {
  id: string
  name: string
  password: string
  role: string
}

export type userModel = Model<IUser, Record<string, unknown>>
