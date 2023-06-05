import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import router from './modules/users/users.router'
import { successLogger } from '../share/logger'

const app: Application = express()
app.use(cors())
app.use(express.json())
app.use('/api/v1/', router)

//** Custom Error Message  */

class ApiError extends Error {
  statusCode: number
  constructor(statusCode: number, message: string | undefined, stack = '') {
    super(message)
    this.statusCode = statusCode

    if (stack) {
      this.stack = stack
    } else {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}

//! Testing
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  throw new ApiError(404, 'Custom Error Message')
  // next("Custom Err On Next Function")
})

//** Log  Production Level */
successLogger.info(app.get('env'))

//** Error Handler  */
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    res.status(400).json({ error: err })
  } else {
    res.status(500).json({ error: 'Something Went Wrong ' })
  }
})
export default app
