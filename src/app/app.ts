import express, { Application } from 'express'
import cors from 'cors'
import router from './modules/users/users.router'
import { successLogger } from '../share/logger'

const app: Application = express()
app.use(cors())
app.use(express.json())
app.use('/api/v1/', router)

// console.log(app.get("env"))
successLogger.info(app.get('env'))

export default app
