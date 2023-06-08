import mongoose, { CastError } from 'mongoose'

export type IGenericErrorMessage = {
  path: string
  message: string
}

export const HandleValidationErr = (err: mongoose.Error.ValidationError) => {
  {
    /*
//? To Convert the properties of an Object into Array we use {* Object.values(arr) *}

 //?  CastError typically indicates that a value couldn't be cast or converted to the expected type defined in the schema

*/
  }
  const errors: IGenericErrorMessage[] = Object.values(err.errors).map(
    (ele: mongoose.Error.ValidatorError | CastError) => {
      return {
        path: ele?.path,
        message: ele?.message,
      }
    }
  )

  // eslint-disable-next-line no-unused-vars
  const statusCode = 400
  return {
    statusCode,
    message: 'Validaton Error',
    errorMessage: errors,
  }
}
