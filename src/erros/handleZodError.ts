/* eslint-disable no-console */
import { ZodError, ZodIssue } from 'zod';
import { IGenericErrorMessage } from './err';
import { IGenericErrorResponse } from './common';

export const handleZodError = (error: ZodError): IGenericErrorResponse => {
  let statusCode = 400;

  const errors: IGenericErrorMessage[] = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue.path[issue.path.length - 1],
      message: issue.message,
    };
  });

  return {
    statusCode,
    message: 'Validation Error',
    errorMessage: errors,
  };
};
