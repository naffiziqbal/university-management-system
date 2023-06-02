import { Router } from 'express'
import { createUser, getUser } from './users.controller'

const router = Router()

router.get('/users', getUser)

router.post('/create-user', createUser)

export default router
