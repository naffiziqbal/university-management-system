import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import router from './modules/users/users.router'
import { successLogger } from '../share/logger'
import ApiError from '../erros/apiErrors'
import { globaErrorhandler } from '../erros/globalErrorHandler'

const app: Application = express()
app.use(cors())
app.use(express.json())
app.use('/api/v1/', router)

//! Testing

{
  /*app.get('/', (req: Request, res: Response, next: NextFunction) => {
    // throw new ApiError(404, 'Custom Error Message')
    next("Custom Err On Next Function")
})
 */
}

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  throw new ApiError(404, 'Data Not Found')

  // next('Something Custom Here')
})

//** Error Handler  */
app.use('/', globaErrorhandler)

//** Log  Production Level */
// successLogger.info(app.get('env'))

export default app
