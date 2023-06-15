import { Router } from 'express';
import { validateRequest } from '../../../middleware/validateRequest';
import { semesterValidation } from './accademicSemester.validation';

const router = Router();

router.post(
  '/create-accademic-semester',
  validateRequest(semesterValidation.createAccademicSemesterZodSchema)
);

export default router;
