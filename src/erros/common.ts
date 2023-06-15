import { IGenericErrorMessage } from './err';

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessage: IGenericErrorMessage[];
};
