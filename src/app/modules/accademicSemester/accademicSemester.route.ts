import { Router } from 'express';
import { validateRequest } from '../../../middleware/validateRequest';
import { semesterValidation } from './accademicSemester.validation';
import { createAccademicSemester } from './accademicSemester.controller';

const router = Router();

router.post(
  '/create-semester',
  validateRequest(semesterValidation.createAccademicSemesterZodSchema),
  createAccademicSemester
);

export const SemesterRoute = router;
