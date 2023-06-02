import mongoose from 'mongoose'
import app from './app/app'
import config from './config'

const port = config.port

async function main() {
  try {
    await mongoose.connect(config.database_url as string)

    app.listen(port, () => {
      'Database Connection Successfull'
    })
  } catch (err) {
    const data = 'Something Went Worng'
    return data
  }
}
main()
