import mongoose from 'mongoose'
import app from './app/app'
import config from './config'
import { errorLogger, successLogger } from './share/logger'
import ApiError from './erros/apiErrors'

const port = config.port

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    successLogger.info('Database Connection Successfull')

    app.listen(port, () => {
      successLogger.info(`Application is Listening on Port ${port} `)
    })
  } catch (err: any) {
    errorLogger.error(err.message)
    throw new ApiError(400, 'Server Connection Failed')
  }
}
main()
