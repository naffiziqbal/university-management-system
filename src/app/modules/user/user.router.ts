import { Router } from 'express';
import { createUser, getUser } from './user.controller';
import { validateRequest } from '../../../middleware/validateRequest';
import { createUserZodSchema } from './user.validation';

const router = Router();

router.get('/users', getUser);

router.post('/create-user', validateRequest(createUserZodSchema), createUser);

export default router;
