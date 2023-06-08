import { NextFunction, Request, Response } from 'express'
import config from '../config'
import { HandleValidationErr, IGenericErrorMessage } from './err'
import ApiError from './apiErrors'

export const globaErrorhandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode
  statusCode = 500

  let message = 'Something Went Wrong'
  let errorMessage: IGenericErrorMessage[] = []
  let path

  // if (err instanceof Error) {
  //     res.status(400).json({ error: err })
  // } else {
  //     res.status(500).json({ error: 'Something Went Wrong ' })
  // }
  res.status(statusCode).json({ err: err })
  next('sOMeThInG wEnT WrOnG')

  if (err.name === 'ValidationError') {
    const simplifiedError = HandleValidationErr(err)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessage = simplifiedError.errorMessage
  } else if (err instanceof ApiError) {
    statusCode = err?.statusCode
    message = err?.message
    errorMessage = err?.message
      ? [
          {
            path: '',
            message: err?.message,
          },
        ]
      : []
  } else if (err instanceof Error) {
    message = err?.message
    errorMessage = err?.message
      ? [
          {
            path: '',
            message: err?.message,
          },
        ]
      : []
  }
  res.status(statusCode).json({
    success: false,
    name: '',
    message,
    errorMessage,
    path,
    stack: config.env !== 'production' ? err.stack : undefined,
  })
}
