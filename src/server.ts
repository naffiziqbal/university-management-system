import mongoose from 'mongoose'
import app from './app/app'
import config from './config'
import { errorLogger, infoLogger } from './share/logger'

const port = config.port

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    infoLogger.info('Database Connection Successfull')

    app.listen(port, () => {
      infoLogger.info(`Application is Listening on Port ${port} `)
    })
  } catch (err: unknown) {
    errorLogger.error(err.message)
  }
}
main()
