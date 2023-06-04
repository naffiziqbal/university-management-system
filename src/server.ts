import mongoose from 'mongoose'
import app from './app/app'
import config from './config'
import { errorLogger, successLogger } from './share/logger'

const port = config.port

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    successLogger.info('Database Connection Successfull')

    app.listen(port, () => {
      successLogger.info(`Application is Listening on Port ${port} `)
    })
  } catch (err: unknown) {
    errorLogger.error(err.message)
  }
}
main()
