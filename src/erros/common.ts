import { IGenericErrorMessage } from './err'

export type IGenericErrorResponse = {
  statuscode: number
  message: string
  erroMessage: IGenericErrorMessage[]
}
