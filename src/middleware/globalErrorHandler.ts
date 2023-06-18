//** Handle  Errors Accross the APP */
/* eslint-disable no-console*/

import { ErrorRequestHandler } from 'express';
import config from '../config';
import { HandleValidationErr, IGenericErrorMessage } from '../erros/err';
import ApiError from '../erros/apiErrors';
import { handleZodError } from '../erros/handleZodError';
import { ZodError } from 'zod';
import { errorLogger } from '../shared/logger';

export const globaErrorHandler: ErrorRequestHandler = (
  error,
  req,
  res,
  next
) => {
  if (config.env === 'development') {
    console.log(error);
  } else {
    errorLogger.error(error);
  }
  let statusCode = 500;
  let message = 'Something Went Wrong';
  let errorMessage: IGenericErrorMessage[] = [];

  if (error?.name === 'ValidationError') {
    const simplifiedError = HandleValidationErr(error);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorMessage = simplifiedError?.errorMessage;
  } else if (error instanceof ZodError) {
    const simplifiedError = handleZodError(error);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorMessage = simplifiedError?.errorMessage;
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode;
    message = error?.message;
    errorMessage = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : [];
  } else if (error instanceof Error) {
    message = error?.message;
    errorMessage = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : [];
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessage,
    stack: config?.env !== 'production' ? error?.stack : undefined,
  });
};
