import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
  port: process.env.PORT,
  database_url: process.env.DB_URL,
  default_user_pass: process.env.DEAFULT_USER_PASS,
}
